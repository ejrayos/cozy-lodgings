import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wmknmlbonfxqyvmumazj.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta25tbGJvbmZ4cXl2bXVtYXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNDY4MDksImV4cCI6MjAyNzYyMjgwOX0.OWnN-YFDDo3k5vuunq_EWIzHcG3QQs8PPaqkPPuY6tA`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
