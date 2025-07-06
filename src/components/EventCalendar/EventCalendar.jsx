import React from 'react'
import './EventCalendar.css'

const EventCalendar = () => {
    const events = [
        { date: "4", month: "May", title: "Computer Hardware Desktops And Notebooks And Handhelds Oh My", time: "15:00 - 17:00", online: true },
        { date: "2", month: "May", title: "Compatible Inkjet Cartridge", time: "12:00 - 14:00", online: true },
        { date: "8", month: "May", title: "Choosing The Best Audio Player Software For Your Computer", time: "14:00 - 15:00", online: true },
        { date: "11", month: "May", title: "Microsoft Patch Management For Home Users", time: "9:00 - 11:00", online: true },
        { date: "14 - 16", month: "May", title: "Help Finding Information Online", time: "11:00 - 13:00", online: true },
        { date: "18 - 20", month: "May", title: "Steps In Installing Rack Mount Lcd Monitors", time: "13:00 - 14:00", online: true }
    ];
    return (
        <div className="event-container">
            <div className="event-grid">
                {events.map((event, index) => (
                    <div
                        className={`event-card ${index % 2 === 0 ? "primary" : "secondary"}`}
                        key={index}
                    >
                        <div className="event-date">
                            <span className="month">{event.month}</span>
                            <span className="day">{event.date}</span>
                        </div>
                        <div className="event-title">{event.title}</div>
                        <div className="event-footer">
                            <span>{event.time} | Online</span>
                            <span className="arrow">→</span>
                        </div>

                        <div className="arrow">→</div>
                    </div>
                ))}
            </div>
            <button className="load-more">LOAD MORE EVENTS</button>
        </div>
    );
}

export default EventCalendar