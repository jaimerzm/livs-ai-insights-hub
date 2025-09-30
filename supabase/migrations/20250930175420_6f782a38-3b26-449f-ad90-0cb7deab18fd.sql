-- Create visitor_count table
CREATE TABLE IF NOT EXISTS public.visitor_count (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count BIGINT NOT NULL DEFAULT 0,
  CONSTRAINT single_row_check CHECK (id = 1)
);

-- Insert initial row
INSERT INTO public.visitor_count (id, count) 
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE public.visitor_count ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read the visitor count
CREATE POLICY "Anyone can view visitor count"
ON public.visitor_count
FOR SELECT
USING (true);

-- Create function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_count
  SET count = count + 1
  WHERE id = 1
  RETURNING count INTO new_count;
  
  RETURN new_count;
END;
$$;