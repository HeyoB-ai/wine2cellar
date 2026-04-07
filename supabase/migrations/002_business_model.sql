-- Update profiles table
alter table public.profiles
  add column if not exists buyer_type text check (buyer_type in ('particulier','horeca')),
  add column if not exists company_kvk text,
  add column if not exists phone text;

alter table public.profiles
  drop constraint if exists profiles_role_check;
alter table public.profiles
  add constraint profiles_role_check
  check (role in ('admin','wijnhuis','afnemer'));

-- Trigger for new users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as
$$
begin
  insert into public.profiles (id, email, role, full_name, company_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'afnemer'),
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'company_name'
  );
  return new;
end;
$$;

-- Wineries table
create table if not exists public.wineries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  country text not null check (country in ('Frankrijk','Italië','Duitsland','Spanje')),
  region text,
  city text,
  website text,
  email text,
  phone text,
  profile_id uuid references public.profiles(id),
  is_claimed boolean default false,
  subscription_active boolean default false,
  subscription_started_at timestamptz,
  created_at timestamptz default now()
);

-- Lots table
create table if not exists public.lots (
  id uuid default gen_random_uuid() primary key,
  winery_id uuid references public.wineries(id) on delete cascade,
  title text not null,
  description text,
  lot_type text check (lot_type in ('restpartij','schadepartij','overproductie','anders')),
  wine_type text check (wine_type in ('rood','wit','rosé','mousseux','overig')),
  vintage integer,
  grape_variety text,
  quantity_bottles integer,
  quantity_boxes integer,
  price_per_bottle numeric(10,2),
  price_per_box numeric(10,2),
  minimum_order_bottles integer default 1,
  minimum_order_boxes integer,
  available_for text[] default array['particulier','horeca'],
  images text[],
  status text default 'actief' check (status in ('actief','gereserveerd','verkocht','verlopen')),
  expires_at timestamptz,
  created_at timestamptz default now()
);

-- Inquiries table
create table if not exists public.inquiries (
  id uuid default gen_random_uuid() primary key,
  lot_id uuid references public.lots(id) on delete cascade,
  buyer_profile_id uuid references public.profiles(id),
  buyer_type text check (buyer_type in ('particulier','horeca')),
  quantity_requested integer,
  message text,
  status text default 'nieuw' check (status in ('nieuw','in_behandeling','bevestigd','afgewezen')),
  created_at timestamptz default now()
);

-- RLS
alter table public.wineries enable row level security;
alter table public.lots enable row level security;
alter table public.inquiries enable row level security;

create policy "Iedereen kan wijnhuizen zien" on wineries for select using (true);
create policy "Iedereen kan actieve partijen zien" on lots for select using (status = 'actief');
create policy "Wijnhuis beheert eigen partijen" on lots for all using (
  winery_id in (select id from wineries where profile_id = auth.uid())
);
create policy "Afnemer ziet eigen aanvragen" on inquiries for select using (buyer_profile_id = auth.uid());
create policy "Afnemer maakt aanvraag" on inquiries for insert with check (buyer_profile_id = auth.uid());
