-- Fix search_path security issue for increment_visitor_count function
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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