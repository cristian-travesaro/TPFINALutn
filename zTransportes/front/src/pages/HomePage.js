import React from 'react';
import '../style/home.css'

const Home = () => {
    return (
        <main className="holder">
            <div className="homeing">
                <img src="img/home/img01.jpg" alt="Avion" />

            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra risus vel feugiat. Curabitur id pretium sapien. In quis enim sodales, ultrices dolor sed, convallis risus. Curabitur in ipsum sem. Cras feugiat semper nisi, a efficitur dui imperdiet ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget suscipit odio. Etiam porttitor turpis dolor, nec molestie orci mollis a. Curabitur malesuada diam tortor. Morbi ac odio et est tincidunt sollicitudin sit amet ac elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus nunc, dictum ac vulputate eget, dictum ut ligula. Suspendisse et justo blandit, fermentum turpis eget, bibendum nisi. Vestibulum ac quam pharetra, suscipit mi id, posuere nibh. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra risus vel feugiat. Curabitur id pretium sapien. In quis enim sodales, ultrices dolor sed, convallis risus. Curabitur in ipsum sem. Cras feugiat semper nisi, a efficitur dui imperdiet ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget suscipit odio. Etiam porttitor turpis dolor, nec molestie orci mollis a. Curabitur malesuada diam tortor. Morbi ac odio et est tincidunt sollicitudin sit amet ac elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus nunc, dictum ac vulputate eget, dictum ut ligula. Suspendisse et justo blandit, fermentum turpis eget, bibendum nisi. Vestibulum ac quam pharetra, suscipit mi id, posuere nibh.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Cristian Travesaro - aerolínea.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
