import style from '@/app/styles/common.module.css'
import Image from 'next/image';

const page = async({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '83079adf63mshe2488a0d7672088p123e42jsn8e6dd049b76b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data[0].details;
  return (
    <>
   <div className={style.container}>
    <h2 className={style.movie_title}> Netflix \ <span>{main_data.type}</span></h2>

    <div className={style.card_section}>
        <div>
            <Image src={main_data.backgroundImage.url} alt={main_data.title} height={300} width={600}/>
        </div>
        <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
        </div>
    </div>
   </div>
      
    </>
  )
}

export default page
