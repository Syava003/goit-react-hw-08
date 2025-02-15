import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={s.bg}>
        <h1 className={s.title}>Welcome to the Contacts Management App!</h1>
        <section className={s.home}>
          <p className={s.description}>
            This page is designed to demonstrate a modern web application built
            with API integration, authentication, routing, Redux Toolkit, and
            React. The main functionality of this app revolves around managing
            contacts, including searching and deleting them, all while
            interacting with a backend service.
          </p>
          <h4 className={s.titlelist}>Key Features of This Application:</h4>
          <ul className={s.list}>
            <li className={s.item}>
              API Integration: The app connects to a backend service to fetch,
              manage, and update contact information in real-time.
            </li>
            <li className={s.item}>
              Authentication: Secure authentication is implemented to ensure
              that only authorized users can access and manage contacts.
            </li>
            <li className={s.item}>
              Routing: The app uses routing to navigate between different pages
              and components without page reloads, providing a seamless user
              experience.
            </li>
            <li className={s.item}>
              Redux Toolkit: State management is handled using Redux Toolkit,
              which efficiently manages the global state of the app, especially
              useful in handling contact data.
            </li>
            <li className={s.item}>
              React: The entire application is built using React, offering a
              fast, responsive, and flexible user interface.
            </li>
            <li className={s.item}>
              Search Contacts: You can easily search for contacts by name or
              other criteria, making it simple to find the information you need
              quickly.
            </li>
            <li className={s.item}>
              Delete Contacts: The app allows you to securely delete contacts,
              with changes instantly reflected in the backend.
            </li>
          </ul>
          <h4 className={s.titlelist}>How It Works:</h4>
          <ul className={s.list}>
            <li className={s.item}>
              Authentication: Users log in to access the contacts management
              features, ensuring secure and personalized access.
            </li>
            <li className={s.item}>
              Routing: The app provides smooth transitions between different
              views such as the contact list, search results, and contact
              details.
            </li>
            <li className={s.item}>
              API Interaction: The app communicates with the backend to fetch
              the latest contact data, search through contacts, and delete them
              as needed.
            </li>
            <li className={s.item}>
              Redux Toolkit: All contact information is managed through Redux,
              making it easy to maintain consistency and handle complex state
              changes.
            </li>
          </ul>
          <p className={s.description}>
            This test project showcases how these technologies work together to
            create a fully functional contacts management system. Explore the
            app to see how it all comes together!
          </p>
        </section>
      </div>
    </>
  );
};

export default HomePage;