import React from "react";
import "../pages/cssPages/AboutPage.css";

// Componente reutilizável para itens de jogabilidade
const GameplayItem = ({ title, description }) => (
  <li className="gameplay-item">
    <strong>{title}:</strong> {description}
  </li>
);

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* Seção de introdução */}
      <section className="about-intro">
        <img
          className="about-logo"
          src="/images/slime_rancher_logo.png"
          alt="logo oficial"
        />
        <p className="about-subtitle">
          Slime Rancher é um jogo de simulação de fazenda em primeira pessoa onde você joga como Beatrix LeBeau, 
          uma rancheira que se muda para um planeta distante para criar slimes e acumular riqueza. Para isso, 
          você coleta slimes com um aspirador, os alimenta com comidas variadas para coletar seus valiosos "plorts"
          (um tipo de dejeto) e os vende no mercado de troca para ganhar dinheiro. O jogo envolve explorar o mundo 
          para descobrir novos tipos de slimes, encontrar itens raros e expandir seu rancho, que pode ser customizado
          com cercados, plantações e outras estruturas.
        </p>
      </section>

      {/* Container flex de duas colunas */}
      <div className="about-columns">
        {/* Seção de jogabilidade */}
        <section className="gameplay-section">
          <h2 className="gameplay-title">Jogabilidade</h2>
          <ul className="gameplay-list">
            <GameplayItem
              title="Coleta"
              description="Você usa um aspirador (VPAC) para capturar slimes e itens. Cada slime possui diferentes gostos de comida e dietas."
            />
            <GameplayItem
              title="Alimentação"
              description="Alimentar os slimes com suas comidas favoritas faz com que eles produzam plorts, essenciais para o progresso no jogo."
            />
            <GameplayItem
              title="Combinações"
              description="Ao alimentar um tipo de slime com os plorts de outro, você pode criar novos tipos de slimes com hábitos e aparências diferentes."
            />
            <GameplayItem
              title="Exploração"
              description="O jogo incentiva a exploração do vasto mundo para encontrar novas áreas, recursos e segredos, como as notas deixadas por um antigo proprietário."
            />
            <GameplayItem
              title="Melhorias"
              description="Você pode melhorar sua personagem, equipamento e rancho para aumentar capacidade, energia, velocidade e até desbloquear um jetpack."
            />
          </ul>
        </section>

        {/* Seção do mapa */}
        <section className="about-map">
          <h2>Mapa do jogo</h2>
          <img className="map-image" src="/images/mapa.png" alt="Mapa do jogo" />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;