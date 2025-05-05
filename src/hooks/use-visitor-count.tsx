
import { useState, useEffect, useCallback } from 'react';

const VISITOR_COUNT_KEY = 'livs-visitor-count';
const VISITOR_COUNTED_KEY = 'livs-visitor-counted';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Try to get the current count from localStorage first (for development)
        let count = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0');
        
        // Check if this visit has already been counted in this session
        const hasBeenCounted = localStorage.getItem(VISITOR_COUNTED_KEY) === 'true';
        
        setVisitorCount(count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error handling visitor count:', error);
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  const incrementVisitorCount = useCallback(() => {
    try {
      // Check if this visit has already been counted in this session
      const hasBeenCounted = localStorage.getItem(VISITOR_COUNTED_KEY) === 'true';
      
      if (!hasBeenCounted) {
        // Get current count
        let count = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0');
        
        // Increment the count for this new visit
        count += 1;
        localStorage.setItem(VISITOR_COUNT_KEY, count.toString());
        localStorage.setItem(VISITOR_COUNTED_KEY, 'true');
        
        // Update state
        setVisitorCount(count);
      }
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  }, []);

  return { visitorCount, isLoading, incrementVisitorCount };
}
