import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";
import React from "react";


const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <div className="forecast-wrapper">
            <label className="title">Daily </label>
            <Accordion allowZeroExpanded className="accordion">
                {data.list.slice(0, 7).map((item, idx) => {
                    return (
                        <AccordionItem key={idx} className="accordion-item">
                            <AccordionItemHeading className="accordion-item-heading">
                                <AccordionItemButton className="accordion-item-button">
                                    <div className="daily-item">
                                        <img
                                            alt="weather"
                                            className="icon-small"
                                            src={`icons/${item.weather[0].icon}.png`}
                                        />
                                        <span className="day">{forecastDays[idx]}</span>
                                        <span className="description">
                                            {item.weather[0].description}
                                        </span>
                                        <span className="min-max">
                                            {Math.round(item.main.temp_min)}°C /{" "}
                                            {Math.round(item.main.temp_max)}°C
                                        </span>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion-item-pannel">
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Pressure:</label>
                                        <label className="parameter-value">{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Humidity:</label>
                                        <label className="parameter-value">{item.main.humidity}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Clouds:</label>
                                        <label className="parameter-value">{item.clouds.all}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Wind Speed:</label>
                                        <label className="parameter-value">{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Sea level:</label>
                                        <label className="parameter-value">{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label className="parameter-label">Feels like:</label>
                                        <label className="parameter-value">{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default Forecast;
