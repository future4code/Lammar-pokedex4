import React from "react";
import { goToBack } from "../../routes/coordinator";
import Header from "../../Components/Header/Header";
import { Ataques, Tipos, PageDetail, ImagesDetails, Poderes, Containers, Container2 } from "./style";

function DetailsPage() {
  return (
    <div>
      <Header />

      <div>
        <PageDetail>
          <ImagesDetails>
            <img
              src={
                "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png"
              }
              alt="Imagem do Pokemon"
            />
            <img
              src={
                "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png"
              }
              alt="Imagem do Pokemon"
            />
          </ImagesDetails>

          <Containers>
            <Poderes>
              <h2>Status</h2>

              <p>hp: 45</p>
              <p>attack: 49</p>
              <p>defesa: 49</p>
              <p>ataque especial: 65</p>
              <p>defesa especial: 65</p>
              <p>velocidade: 45</p>
            </Poderes>
            <div>
            <Container2>
              <Tipos>
                <li>veneno</li>
                <li>grama</li>
              </Tipos>

              <Ataques>
                <h2>Principais ataques</h2>
                <li>Razor-Wind</li>
                <li>Swords-Dance</li>
                <li>Cut</li>
                <li>Bind</li>
                <li>Vine-Whip</li>
              </Ataques>
              </Container2> 
            </div>
          </Containers>
        </PageDetail>
      </div>
    </div>
  );
}

export default DetailsPage;
