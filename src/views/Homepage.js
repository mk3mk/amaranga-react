import React from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom';




function Homepage() {
  useEffect(() => {
    document.title = 'Amaranga';
  }, []);
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <img style={{width:"220px", padding:"6px"}} src="https://api.amaranga.ru/images/Amaranga-white.png" alt="" />
        <p>
          This is a game room ... 
        </p>

          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>

      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">


        <div className="col-md-4 mycart">
          <h2>Cubes</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/cubes-112-01.png" alt="" />
          <p>
          Cubes — это увлекательная логическая игра, где игроки погружаются в мир трехмерных головоломок и пространственного мышления. Ваша задача — манипулировать разноцветными кубами, чтобы решить различные задачи и пройти уровни. Каждый уровень предлагает уникальные вызовы: от простых комбинаций до сложных механик, требующих стратегического мышления и быстроты реакции...{" "}
          </p>

            <a className="btn btn-secondary" href="https://amaranga.ru/games/cubes/" role="button">
              View details »
            </a>

        </div>


        <div className="col-md-4 mycart">
          <h2>Roulette</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/Roulette.png" alt="" />
          <p>
          Roulette — это захватывающая игра казино, которая погружает игроков в мир удачи и стратегии. 
          В основе игры лежит вращающееся колесо с числами и цветами, а также стильный игровой стол, где участники делают свои ставки. 
Игроки могут выбирать различные типы ставок: на конкретные числа, группы чисел, цвета (красный или черный) или четные/нечетные. Как только ставки сделаны, крупье запускает шарик по кругу колеса. 
Волнение нарастает, когда шарик начинает замедляться, и игроки с нетерпением ждут, на каком числе он остановится..{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="https://amaranga.ru/games/roulette/" role="button">
              View details »
            </a>
          </p>
        </div>


        <div className="col-md-4 mycart">
          <h2>Cells</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/cells-01.png" alt="" />
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a className="btn btn-secondary" href="https://amaranga.ru/games/cells/" role="button">
              View details »
            </a>
          </p>
        </div>





        <div className="col-md-4 mycart">
          <h2>Cubes-01</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/cubes-01.png" alt="" />
          <p>
          Cubes — это увлекательная логическая игра, где игроки погружаются в мир трехмерных головоломок и пространственного мышления. Ваша задача — манипулировать разноцветными кубами, чтобы решить различные задачи и пройти уровни. Каждый уровень предлагает уникальные вызовы: от простых комбинаций до сложных механик, требующих стратегического мышления и быстроты реакции...{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="https://amaranga.ru/games/cubes-01/" role="button">
              View details »
            </a>
          </p>
        </div>


        <div className="col-md-4 mycart">
          <h2>Cards</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/cards-01.png" alt="" />
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="https://amaranga.ru/games/cards/" role="button">
              View details »
            </a>
          </p>
        </div>

        <div className="col-md-4 mycart">
          <h2>Roulette</h2>
          <img style={{width:"100%", padding:"6px"}} src="https://api.amaranga.ru/images/Roulette.png" alt="" />
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="https://amaranga.ru/games/roulette/" role="button">
              View details »
            </a>
          </p>
        </div>


        <Link to="/Path" > Contact us </Link>












      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Amaranga 2022-2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage