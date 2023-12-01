import RetroImage from "../../assets/New-homepage/image-retro-pcs.jpg"
import Laptaopmage from "../../assets/New-homepage/image-top-laptops.jpg"
import GaminImage from "../../assets/New-homepage/image-gaming-growth.jpg"


export const news = [
    {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        title: "The Downsides of AI Artistry",
        description: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    },
] as const;


export const articals = [
    {
        id: 1,
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
        image: RetroImage
    },
  
    {
        id: 2,
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets.",
        image: Laptaopmage
    },

    {
        id: 3,
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked fresh opportunities.",
        image: GaminImage
    },
] as const;