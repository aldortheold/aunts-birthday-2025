import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCarSide, FaRoad } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import { MdGarage } from 'react-icons/md';
import { FiKey } from 'react-icons/fi';

const slides = [
    { id: 0, title: 'С Днём Рождения, Мариша!', text: '', bg: 'linear-gradient(135deg, #ff7579ff 0%, #edb6ffff 100%)', Icon: GiPartyPopper },
    { id: 1, title: 'Приключение впереди!', text: 'Ты ведёшь жизнь уверенно, и впереди ещё столько дорог!', bg: 'linear-gradient(135deg, #f43f5e 0%, #a21caf 100%)', Icon: FaCarSide },
    { id: 2, title: 'Открытая дорога!', text: 'Пусть путешествие приносит только радость и свободу!', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', Icon: FaRoad },
    { id: 3, title: 'Праздник в пути!', text: 'Пристегни ремни — сегодня ярче всех твой праздник!', bg: 'linear-gradient(135deg, #fbbf24 0%, #f472b6 100%)', Icon: GiPartyPopper },
    { id: 4, title: 'Парковочные воспоминания!', text: 'Пусть каждый новый старт приносит вдохновение!', bg: 'linear-gradient(135deg, #6ee7b7 0%, #14b8a6 100%)', Icon: MdGarage },
    { id: 5, title: 'Ключ к будущему!', text: 'За новые ключи, новые маршруты и бесконечные возможности!', bg: 'linear-gradient(135deg, #bfdbfe 0%, #8b5cf6 100%)', Icon: FiKey },
];

function App() {
    const [index, setIndex] = useState(0);
    const next = () => setIndex(i => (i + 1) % slides.length);
    const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);

    return (
        <div style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: slides[index].bg,
        position: 'relative',
        fontFamily: "'Montserrat', sans-serif",
        overflow: 'hidden',
        }}>
            <AnimatePresence>
                <motion.div
                    key={slides[index].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#fff',
                        padding: 16,
                        borderRadius: 16,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                        maxWidth: 240,
                        textAlign: 'center',
                    }}
                >
                    {slides[index].Icon && React.createElement(slides[index].Icon, { size: 100, style: { margin: '16px 0' } })}
                    <h2 style={{
                        fontSize: slides[index].id === 0 ? 28 : 20,
                        margin: '12px 0 6px',
                        fontFamily: slides[index].id === 0 ? "'Pacifico', cursive" : "'Montserrat', sans-serif",
                    }}>
                        {slides[index].title}
                    </h2>
                    {slides[index].text && <p style={{ fontSize: 14, margin: '4px 0' }}>{slides[index].text}</p>}
                </motion.div>
            </AnimatePresence>

            <div style={{ position: 'absolute', bottom: 16, display: 'flex', gap: 8 }}>
                <button onClick={prev} style={{ padding: '8px 16px', borderRadius: 24, border: 'none', opacity: 0.8, cursor: 'pointer', fontSize: 14 }}>Назад</button>
                <button onClick={next} style={{ padding: '8px 16px', borderRadius: 24, border: 'none', opacity: 0.8, cursor: 'pointer', fontSize: 14 }}>Вперед</button>
            </div>
        </div>
    );
}

export default App;