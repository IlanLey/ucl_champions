import React from "react";
import ajaxImage from "../assets/ajax.png";
import milanImage from "../assets/acmilan.jpg";
import madridImage from "../assets/madrid.jpg";
import liverpoolImage from"../assets/liverpool.jpeg";
import barcaImage from "../assets/barca.jpg";
import bayernImage from "../assets/bayern.jpg";
import juveImage from "../assets/juve.jpg";
import unitedImage from "../assets/united.jpg";
import chelseaImage from "../assets/chelsea.jpg";
import interImage from "../assets/inter.jpg";


const winnersData = [
    {id: 1, team: "Ac Milan", wins: 7, image: milanImage, summary: "AC Milan is one of the most successful clubs in the world, having won seven UEFA Champions League titles.", wiki: "https://en.wikipedia.org/wiki/A.C._Milan"},
    {id: 2, team: "Real Madrid", wins: 13, image: madridImage, summary: "Real Madrid holds the record for the most UEFA Champions League titles, with 13 victories.", wiki: "https://en.wikipedia.org/wiki/Real_Madrid_CF"},
    {id: 3, team: "Liverpool", wins: 6, image: liverpoolImage, summary: "Liverpool is a top English club with six UEFA Champions League titles, known for their passionate fan base.", wiki: "https://en.wikipedia.org/wiki/Liverpool_F.C."},
    {id: 4, team: "Barcelona", wins: 5, image: barcaImage, summary: "FC Barcelona is a Spanish club with five UEFA Champions League titles, famous for their attacking style of play.", wiki: "https://en.wikipedia.org/wiki/FC_Barcelona"},
    {id: 5, team: "Bayern Munich", wins: 6, image: bayernImage, summary: "Bayern Munich is a dominant force in German football, with six UEFA Champions League titles.", wiki: "https://en.wikipedia.org/wiki/FC_Bayern_Munich"},
    {id: 6, team: "Juventus", wins: 2, image: juveImage, summary: "Juventus is an Italian club with two UEFA Champions League titles, known for their strong defense.", wiki: "https://en.wikipedia.org/wiki/Juventus_FC"},
    {id: 7, team: "Manchester United", wins: 3, image: unitedImage, summary: "Manchester United is one of the most popular clubs in the world, with three UEFA Champions League titles.", wiki: "https://en.wikipedia.org/wiki/Manchester_United_F.C."},
    {id: 8, team: "Chelsea", wins: 2, image: chelseaImage, summary: "Chelsea is a top English club with one UEFA Champions League title, known for their strong squad.", wiki: "https://en.wikipedia.org/wiki/Chelsea_F.C."},
    {id: 9, team: "Inter Milan", wins: 3, image: interImage, summary: "Inter Milan is an Italian club with three UEFA Champions League titles, known for their tactical prowess.", wiki: "https://en.wikipedia.org/wiki/Inter_Milan"},
    {id: 10, team: "Ajax", wins: 4, image: ajaxImage, summary: "Ajax is a Dutch club with four UEFA Champions League titles, famous for their youth academy and attacking football.", wiki: "https://en.wikipedia.org/wiki/AFC_Ajax"},
];

const Winners = () => {
    return (
        <>
            <div className="container">
                {winnersData.map((winner) => (
                    <div key={winner.id} className="card">
                        <img src={winner.image} alt={winner.team} className="teamphoto" />
                        <h3>{winner.team}</h3>
                        <h4>{winner.wins}x 🏆</h4>
                        <p>{winner.summary}</p>
                        <a href={winner.wiki} target="_blank" rel="noreferrer">Learn more</a>
                    </div>
                ))}
            </div>        
        </>
    )
}

export default Winners;
