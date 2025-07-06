import React from 'react'
import './EventList.css'

const EventList = () => {
    const events = [
        { id: 1, title: "Tech Expo 2025", days: "", hours: "", minutes: "", seconds: "", isLive: true },
        { id: 2, title: "Spine Surgery Conference", days: "", hours: "", minutes: "", seconds: "", isLive: true },
        { id: 3, title: "Auto Expo 2025", days: "", hours: "", minutes: "", seconds: "" },
        { id: 4, title: "Global Travel Fair", days: "", hours: "", minutes: "", seconds: "" }
    ];

    return (
        <div className="event-list-container">
            <h1 className="event-list-title">Event Lists</h1>

            {/* Live events dropdown */}
            <div className="live-events-dropdown">
                <button className="dropdown-toggle">
                    Open this select menu
                    {/* <span className="dropdown-icon">▼</span> */}
                </button>
                <ul className="dropdown-menu">
                    <li className="live-event-item">
                        <span className="live-badge">Live now</span>
                    </li>
                    <li className="live-event-item">
                        <span className="live-badge">Live now</span>
                    </li>
                </ul>
            </div>

            {/* Event cards */}
            <div className="event-cards-container">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <h3 className="event-title">{event.title}</h3>
                        <div className="event-timer">
                            <div className="timer-item">
                                <span className="timer-value">{event.days}</span>
                                <span className="timer-label">Day</span>
                            </div>
                            <div className="timer-item">
                                <span className="timer-value">{event.hours}</span>
                                <span className="timer-label">Hours</span>
                            </div>
                            <div className="timer-item">
                                <span className="timer-value">{event.minutes}</span>
                                <span className="timer-label">Minute</span>
                            </div>
                            <div className="timer-item">
                                <span className="timer-value">{event.seconds}</span>
                                <span className="timer-label">Second</span>
                            </div>
                        </div>
                        {event.isLive && (
                            <div className="event-live-badge">
                                <span className="live-badge">Live now</span>
                            </div>
                        )}
                        <button className="view-more-btn">View More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList