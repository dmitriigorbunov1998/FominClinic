import './index.css'
import Header from "./Components/Header/Header.jsx";
import Card from "./Components/Card/Card";
import UserPage from "./Components/UserPage/UserPage.jsx";

export default function App() {

    return (
    <>
        <Header />
        <main>
            <Card />
            <UserPage />
        </main>
    </>
  )
}
