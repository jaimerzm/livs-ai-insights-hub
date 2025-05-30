
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const VISITOR_COUNTED_KEY = 'livs-visitor-counted';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Get current count from Supabase
        const { data, error } = await supabase
          .from('visitor_count')
          .select('count')
          .eq('id', 1)
          .single();
        
        if (error) throw error;
        
        setVisitorCount(data.count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  const incrementVisitorCount = useCallback(async () => {
    try {
      // Check if this visit has already been counted in this session
      const hasBeenCounted = localStorage.getItem(VISITOR_COUNTED_KEY) === 'true';
      
      if (!hasBeenCounted) {
        // Call the Supabase function to increment the count
        const { data, error } = await supabase.rpc('increment_visitor_count');
        
        if (error) throw error;
        
        // Update state with the new count
        setVisitorCount(data);
        localStorage.setItem(VISITOR_COUNTED_KEY, 'true');
      }
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  }, []);

  return { visitorCount, isLoading, incrementVisitorCount };
}
