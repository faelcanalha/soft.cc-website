import { FaCheck, FaTimes } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import NavBar from "../Components/NavBar";

function Home() {
    return (
        <>
            <NavBar />

            <main className="home" id="home">
                <Fade bottom>
                    <article className="about">
                        <h1>Soft</h1>
                        <p>A secure, effective, and affordable login solution developed by <a href="https://github.com/justmefael" target={"_blank"} rel="noreferrer" style={{ color: 'var(--color)' }}>Fael</a> to meet the needs of different types of applications in languages such as C++, C#, Python, and others. With an emphasis on performance and price, it offers a complete and easy-to-use solution for user authentication.</p>
                    </article>
                </Fade>
                <figure>
                    <img src="imgs/security.png" alt="security" />
                </figure>
            </main>

            <main className="prices" id="prices">
                <Fade bottom cascade>
                    <article className="card card--demo">
                        <h2>Demo Subscription</h2>
                        <h3>R$ 0,00<span>/monthly</span></h3>
                        <p className="card__description">Limited access to experience Soft features</p>
                        <ul className="card__list">
                            <li><span><FaTimes /></span>Users Unlimited (Max 10)</li>
                            <li><span><FaCheck /></span>Discord Webhook</li>
                            <li><span><FaTimes /></span>Variables</li>
                            <li><span><FaCheck /></span>Logs</li>
                            <li><span><FaCheck /></span>Hardware Blacklist</li>
                            <li><span><FaTimes /></span>Discord BOT</li>
                        </ul>
                        <div className="card__btn">
                            <button className="btn btn--primary">Start for Free</button>
                        </div>
                    </article>
                    <article className="card card--dev">
                        <h2>Dev. Subscription</h2>
                        <h3>R$ 9,99<span>/monthly</span></h3>
                        <p className="card__description">Unlimited access and better experience</p>
                        <ul className="card__list">
                            <li><span><FaCheck /></span>Users Unlimited</li>
                            <li><span><FaCheck /></span>Discord Webhook</li>
                            <li><span><FaCheck /></span>Variables</li>
                            <li><span><FaCheck /></span>Logs</li>
                            <li><span><FaCheck /></span>Hardware Blacklist</li>
                            <li><span><FaTimes /></span>Discord BOT</li>
                        </ul>
                        <div className="card__btn">
                            <button className="btn btn--secondary">Purchase</button>
                        </div>
                    </article>
                </Fade>
            </main>
        </>
    );
}

export default Home;
