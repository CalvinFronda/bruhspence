# Bruhspence: Expense Tracking & Entertainment for Spontaneous Groups

Bruhspence is a web application designed to simplify expense tracking for groups of friends or travelers who prefer to keep their plans flexible and don't adhere to strict itineraries. It also provides access to games to keep users entertained during their trips.

## Features

- **Expense Tracking:** Easily record and split expenses among group members.
- **Game Integration:** Access a variety of games to play during travel or downtime.
- **Group-Focused:** Designed for groups that don't plan events rigidly, allowing for spontaneous activities.

## Technologies Used

- Next.js
- Supabase
- Tailwind CSS
- Lucide React
- next-themes

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    - Rename `.env.local.example` to `.env.local`.
    - Obtain your Supabase URL and Anon Key from your Supabase project's API settings.
    - Update the `.env.local` file with your Supabase credentials:

      ```
      NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

- **Vercel:** This project is configured for easy deployment on Vercel. Simply push your code to a Vercel project, and it will automatically deploy.

Before submitting, please ensure:

- Run `npm run build` to check for type check errors.
- Run `npm run format` to lint the app.
