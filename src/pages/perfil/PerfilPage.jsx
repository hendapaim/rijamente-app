import React from "react";
import Header from "../../components/Header";
import "./PerfilPage.css";

function PerfilPage() {
  return (
    <>
      <title>Perfil | Rijamente</title>
      <div className="p-4">
        <div class="card w-100 bg-base-100 shadow-md mb-4">
          <div class="card-body">
            <div class="card-actions">
              <div class="avatar online justify-self-center">
                <div class="w-24 mask mask-squircle">
                  <img src="https://api.lorem.space/image/face?w=128&h=128" />
                </div>
              </div>

              <div>
                <div class="stat-value">Henda Paim</div>
                <div class="stat-title">Aluno</div>
                <div class="stat-desc text-secondary">NÍVEL 2</div>
                <progress
                  class="progress progress-primary w-56"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>

            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-100 bg-base-100 shadow-md">
          <ul class="flex justify-center menu menu-horizontal bg-base-100">
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>Formação</a>
            </li>
            <li>
              <a>Cursos</a>
            </li>
            <li>
              <a class="active">Certificações</a>
            </li>
            {/* <li>
            <a>Actividade</a>
          </li> */}
          </ul>
        </div>

        <div class="card w-100 bg-base-100 shadow-md mt-4">
          <div class="card-body">
            <p>
              CERTIFICAÇÃO MICROSOFT Renove as suas certificações ao ligar o seu
              perfil de certificação Faça uma avaliação online para demonstrar
              que as suas competências estão atualizadas Passe na avaliação para
              prolongar a sua certificação por um ano. Não passou? Reveja os
              materiais de preparação e tente novamente antes de a sua
              certificação expirar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilPage;
