import style from "@/app/styles/common.module.css"
import MovieCard from "../components/MovieCard";
const page = async () => {

  // await new Promise(executor, resolve => setTimeout(resolve, timeout, 2000));

const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '83079adf63mshe2488a0d7672088p123e42jsn8e6dd049b76b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
console.log(data)
  return (
    <>
    <section className={style.movieSection}>
      <div className={style.container}>
      <h1>Series & Movies</h1>
      <div className={style.card_section}>
      {
         main_data.map((curElem) =>{
          return <MovieCard key={curElem.id} {...curElem}/>
         })
      }

      </div>
     
      </div>

    </section>
   
    </>
  )
}

export default page
