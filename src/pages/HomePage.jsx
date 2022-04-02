import logo from "../logo.png";
import coverImage from "../cover-artwork.webp";
import coverBene from "../cover-bene.png";
import "./HomePage.css";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <title>Home | Rijamente</title>

      <div className="content">
        <div className="flex justify-center mb-14 md:h-[80vh]">
          <header className="container cover grid md:grid-cols-2 gap-4 w-100 mx-auto">
            <div className="cover_detalhes p-4">
              <h1 className="text-4xl font-bold leading-normal italic mb-5">
                Rijamente
              </h1>
              <p className="mb-14">
                Vem Aprender com rijamente e sai sempre feliz em cada exame.
                Encontre matériais direcionadas e específicas de cada cadeira da
                sua escola ou faculdade.
              </p>
              <h3 className="mb-4">
                MATÉRIAS DE EXATAS EXPLICADAS COM A MELHOR DIDÁTICA.
              </h3>

              <div className="cover_form">
                <h2 className="bg-primary text-primary-content rounded-md p-2 mb-4">
                  Crie sua conta e exprerimenta grátis!
                </h2>
                <div>
                  <form method="post">
                    <div class="form-control">
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="rijamente@site.com"
                          class="input input-bordered"
                        />
                        <button class="btn btn-primary">Subscrever</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <img
                className="cover__artwork"
                title="Aprender com rijamente"
                width="475"
                alt="Aprender com rijamente"
                src={coverImage}
              />
            </div>
            {/* <p>Bem-Vindo a Sua sebenta!</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Estámos a criar o melhor para sua formação.</p> */}
          </header>
        </div>

        <div className="container mx-auto">
          <div className="blog mb-14 grid md:grid-cols-2 gap-4 w-100 mx-auto">
            <div className="flex justify-center flex-col mx-auto">
              <img
                className="cover__artwork"
                title="Aprender com rijamente"
                width="475"
                alt="Aprender com rijamente"
                src={coverBene}
              />
            </div>
            <div className="cover_detalhes p-4">
              <h1 className="text-3xl font-bold leading-normal italic mb-5">
                Conheça outros benefícios de usar a plataforma
              </h1>
              <ul>
                <li className="text-lg leading-normal mb-5">Aprenda em qualquer lugar</li>
                <li className="text-lg leading-normal mb-5">Ganhe tempo nos estudos</li>
                <li className="text-lg leading-normal mb-5">Acesse 14 milhões de aulas, simulados, resumos e muito mais!</li>
              </ul>
            </div>
          </div>

          {/* <div className="blog mb-14">
            <div className="cover_detalhes p-4">
              <h1 className="text-4xl font-bold leading-normal italic mb-5">
                <a className="link link-hover" href="#">
                  Blog
                </a>
              </h1>
            </div>
          </div> */}

          <div className="livros mb-14">
            <div className="cover_detalhes p-4">
              <h1 className="text-3xl font-bold leading-normal italic mb-5">
                <a className="link link-hover" href="#">
                  Livros
                </a>
              </h1>
            </div>
            <div class="carousel carousel-center p-4 space-x-4 h-80">
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://api.lorem.space/image/book?w=150&h=220"
                  class="rounded-box"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
