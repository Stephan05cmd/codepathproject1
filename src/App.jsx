import './App.css';
import Cards from './components/cards'

const App = () => {

  return (
    <div className="App">
        <h1>Fashion Aesthetics</h1>
        <div className="Card-list">
        <Cards 
          imgSrc="https://i.pinimg.com/736x/dd/01/50/dd0150daa38b39a63a4f3c70b43e5b66.jpg" 
          imgAlt="A person wearing the steerwear aesthetic" 
          title="Streetwear Aesthetic" 
          description="Streetwear aesthetic blends casual, oversized clothing with bold graphics, logos, and a mix of skate, hip-hop, and urban influences. It prioritizes comfort and individuality. Sneakers, Graphic T-shirts, and hoodies are staples in your wardrobe. "
          buttonText="Learn More" 
          link="https://www.pinterest.com/search/pins/?q=streetwear%20inspo&rs=typed"
        />

        <Cards 
          imgSrc="https://www.fashionbeans.com/wp-content/uploads/2024/04/lestrangelondon_manwearingagraysweaterandblackpants.jpg"
          imgAlt="A person wearing the Minimalist Aesthetic"
          title="Minimalist Aesthetic"
          description="If you like to keep it simple look no further than the Minimalist Aesthetic. You are essentially returning to the basics with items made of premium quality. Such as plain T-shirts, luxury leather sneakers, and well-fitting jeans and trousers."
          buttonText="Learn More"
          link="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=mens%20outfit%20inspo%20minimalist&eq=Minimalist%20outfit%20inspo%20men&etslf=2953"
        />

        <Cards 
          imgSrc="https://miro.medium.com/v2/resize:fit:1200/1*hc_KaMmQVGRNXlvQP6sefg.jpeg"  
          imgAlt="Person wearing the Preppy Aesthetic"
          title="Preppy Aesthetic"
          description="The preppy aesthetic came about from the admiration of Ivy League schools because of how elegant they presented themselves. Sophistication is the way to describe this aesthetic. The popular Items that go with the aesthetic would be polo T-shirts, button-down shirts, blazers, khaki pants, and loafers."
          buttonText="Learn More"
          link="https://www.pinterest.com/search/pins/?q=preppy%20aesthetic%20outfits&rs=typed"
        />

         <Cards 
          imgSrc="https://i.pinimg.com/564x/51/09/e0/5109e080cfed9df43e48479e8ddd6408.jpg"
          imgAlt="Person rocking the Workwear Aesthetic"
          title="Workwear Aesthetic"
          description="Workwear was inspired by clothes manual laborers wear to work. The aesthetic provides longevity and swag. Due to the thick material in workwear, the clothes never stretch out or tear. The key item you would notice when it comes to workwear would have to be Carhartt. This is because of how durable and timeless the pieces are."  
          buttonText="Learn More"
          link="https://www.pinterest.com/search/pins/?q=workwear%20core%20fashion%20men&rs=typed"
        />

        <Cards 
        imgSrc="https://hespokestyle.com/wp-content/uploads/2023/10/gorpcore-fashion-3-616x616@2x.jpg"
        imgAlt="Person rocking the Gorpcore Aesthetic"
        title="Gorpcore Aesthetic"
        description="This is the usual outfit someone who is going for hikes would wear but as long as the aesthetic interests you go for it. Popular brands like Patagonia and Arc'teryx are what give that beautiful gorpcore look. Cargo pants and waterproof jackets make the essence of gorpcore which many people find attractive."  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=gorpcore%20aesthetic%20inspo&rs=typed"
        />

        <Cards 
        imgSrc="https://www.thefashionisto.com/wp-content/uploads/2023/05/Ralph-Lauren-Old-Money-Brand-Men.jpg"
        imgAlt="Person rocking the Old Money Aesthetic"
        title="Old Money Aesthetic"
        description="By prioritizing the quality over the quantity you give off a refined and wealthy look. It's quite similar to the minimalist aesthetic but the subtle touches can make the difference between the two."  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=old%20money%20aesthetic%20inspo&rs=typed"
        />

        <Cards 
        imgSrc="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/12/featured-hip-hop2.jpg"
        imgAlt="Person rocking the 90's Hip Hop Aesthetic"
        title="90's Hip Hop Aesthetic"
        description="The '90s hip-hop aesthetic was the inspiration for the streetwear we know and love today. Even though it's slightly changed the core value is still there. Huge chains matched with loose-fitting pants were the staple for the streetwear look. I can't forget the infamous oversized jerseys we know and love mixed in with the backward-fitted cap."  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=90%27s%20hip%20hop%20aesthetic&rs=typed"
        />

       <Cards 
        imgSrc="https://wwd.com/wp-content/uploads/2023/10/dark-academia-aesthetic-explained.jpg?w=1000&h=563&crop=1"
        imgAlt="Person rocking the Dark Academia Aesthetic"
        title="The Dark Academia Aesthetic"
        description="This aesthetic is very classy and beautiful like the preppy aesthetic but this gives that Hogwarts vibe from Harry Potter. The tidy look is very professional and can be for those who want to break into fashion but also keep the professional feeling they get. "  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=The%20Dark%20Academia%20Aesthetic%20outfits&rs=typed"
        />

       <Cards 
        imgSrc="https://i.pinimg.com/564x/26/ed/18/26ed18dcc8e37e08d4cb588dd784a031.jpg"
        imgAlt="Person rocking the skater boy Aesthetic"
        title="Skater Aesthetic"
        description="This look fits those who are true skaters and not only see it as a hobby but as a lifestyle. The comfy look paired with the skateboard gives the ultimate combo. You would want to look into graphic tees, flannel shirts, cargo pants, and a fire beanie. For shoes it could be a wide range of things just make sure it is flat on the bottom."  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=skater%20boy%20aesthetic%20fashion%20inspo&rs=typed"
        />

       <Cards 
        imgSrc="https://www.orezoria.com/wp-content/uploads/2024/02/Opiumcore-Clothing-768x432.jpg"
        imgAlt="Person rocking the Opium Aesthetic"
        title="Opium Aesthetic"
        description="See now this is a special aesthetic if you want to stick to just wearing strictly black and silver jewelry. This aesthetic was inspired by Playboy Carti. You wear a wide variety of textures to have that all-black outfit pop out like fax further and leather. You should lean towards wearing brands like Balenciaga, Raf Simons, and Rick Owens."  
        buttonText="Learn More"
        link="https://www.pinterest.com/search/pins/?q=opium%20fashion%20inspo&rs=typed"
        />
        </div>
       

    </div>
  )
}

export default App


