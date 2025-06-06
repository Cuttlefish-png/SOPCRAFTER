import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client when environment variables are missing
const createMockClient = () => {
  console.warn('Using mock Supabase client - authentication and data persistence are disabled');
  return {
    auth: {
      signIn: async () => ({ data: { user: null }, error: null }),
      signUp: async () => ({ data: { user: null }, error: null }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: null, error: null }),
      update: () => ({ data: null, error: null }),
      delete: () => ({ data: null, error: null }),
    }),
  };
};

// Use real client if environment variables are present, otherwise use mock
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();

// Optional: Define types for your database schema for better type safety
// Example types (adjust based on your actual database schema)
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { // The data expected from Supabase
          id: string; // auth.users uuid
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: { // The data accepted for insert
          id: string; // auth.users uuid
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: { // The data accepted for update
          id?: string; // auth.users uuid
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      sops: {
        Row: { // The data expected from Supabase
          id: string; // uuid
          user_id: string; // auth.users uuid
          title: string;
          description: string | null;
          video_url: string | null;
          status: 'draft' | 'processing' | 'completed' | 'failed';
          created_at: string;
          updated_at: string;
        };
        Insert: { // The data accepted for insert
          id?: string; // uuid
          user_id: string; // auth.users uuid
          title: string;
          description?: string | null;
          video_url?: string | null;
          status?: 'draft' | 'processing' | 'completed' | 'failed';
          created_at?: string;
          updated_at?: string;
        };
        Update: { // The data accepted for update
          id?: string; // uuid
          user_id?: string; // auth.users uuid
          title?: string;
          description?: string | null;
          video_url?: string | null;
          status?: 'draft' | 'processing' | 'completed' | 'failed';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      // Add views here if you have any
    };
    Functions: {
      // Add functions here if you have any (like handle_new_user)
       handle_new_user: {
         Args: {}; // Define args if your function takes them
         Returns: any; // Define return type
       };
       handle_updated_at: {
          Args: {};
          Returns: any;
       };
    };
    Enums: {
      // Add enums here if you have any
    };
  };
};

// You can also create a typed client if you have the Database type generated
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient<Database>(
//   supabaseUrl as string,
//   supabaseAnonKey as string
// ) 