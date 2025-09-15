/*
  # Initial Schema Setup

  1. New Tables
    - Equipment table with pricing and availability
    - Products table for medical supplies
    - Equipment leases tracking
    - Product orders management
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Equipment
CREATE TABLE IF NOT EXISTS equipment (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  daily_rate decimal(10,2) NOT NULL,
  monthly_rate decimal(10,2) NOT NULL,
  available boolean DEFAULT true,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON equipment
  FOR SELECT
  TO authenticated
  USING (true);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  min_order integer NOT NULL,
  unit text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Initial Equipment Data
INSERT INTO equipment (name, description, daily_rate, monthly_rate, image_url) VALUES
('Harmony XL Pro', 'Advanced aesthetic treatment system', 350.00, 2500.00, 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80'),
('Fun Sculpting System', 'Body contouring and fat reduction', 450.00, 3500.00, 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80'),
('Renuvion System', 'Advanced skin tightening technology', 450.00, 3500.00, 'https://images.unsplash.com/photo-1583912267550-d6c2f5e83a9c?auto=format&fit=crop&w=800&q=80'),
('ScarletRF Microneedling', 'RF microneedling system', 300.00, 2000.00, 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80');

-- Initial Product Categories
INSERT INTO products (name, type, description, price, min_order, unit) VALUES
('Premium Neurotoxin', 'neurotoxin', 'Premium grade neurotoxin for aesthetic treatments', 580.00, 50, 'units'),
('Advanced Dermal Filler', 'filler', 'High-quality dermal filler for volume restoration', 280.00, 5, 'boxes');