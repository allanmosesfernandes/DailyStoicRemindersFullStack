// import React, { useState, useEffect } from 'react';
// import { useAuthContext } from '@/path/to/AuthProvider';
// import { supabase } from '@/lib/supabase';
// 
// const DailyQuote = () => {
//   // ... existing code ...
// 
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const { user } = useAuthContext();
// 
//   useEffect(() => {
//     const checkIfBookmarked = async () => {
//       if (!user) {
//         return;
//       }
// 
//       try {
//         // Get today's date in UTC
//         const today = new Date();
//         const utcYear = today.getUTCFullYear();
//         const utcMonth = String(today.getUTCMonth() + 1).padStart(2, '0');
//         const utcDay = String(today.getUTCDate()).padStart(2, '0');
//         const todayUTCDate = `${utcYear}-${utcMonth}-${utcDay}`;
// 
//         // Start and end of the day in UTC
//         const startOfDay = new Date(`${todayUTCDate}T00:00:00Z`);
//         const endOfDay = new Date(`${todayUTCDate}T23:59:59Z`);
// 
//         const { data, error } = await supabase
//           .from('bookmarks')
//           .select('id')
//           .eq('user_id', user.id)
//           .gte('created_at', startOfDay.toISOString())
//           .lte('created_at', endOfDay.toISOString());
// 
//         if (error) {
//           console.error('Error checking bookmark:', error);
//           return;
//         }
// 
//         setIsBookmarked(data.length > 0);
//       } catch (error) {
//         console.error('Error in checkIfBookmarked:', error);
//       }
//     };
// 
//     checkIfBookmarked();
//   }, [user]);
// 
//   // ... rest of your component ...
// };
