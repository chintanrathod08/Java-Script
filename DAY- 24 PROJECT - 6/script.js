let arr = [
   
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_copy_2_tmZz777.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_11_JMLyesX.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_5_zrhZQfI.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_pj9o7hl.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_2_1_copy.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Casual_Shirts_HOMEPAGEpsd.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_5_vKR0TF5.jpg?format=webp&w=1500&dpr=1.3"
   
]   
     
    
     let n = 0;
     
     function Prev(){
     
        
           
            if( n == arr.length){
                n = 0
            }
           
            n++;
            
        
            document.getElementById("slider").innerHTML =`<img src="${arr[n]}"  heigth = "600px"; width = "100%";>`
                

      
        
         
        
     }
     
    //  ------------------------------

     function Next(){
        
        
            n--;
     
            if( n<0 ){
                n=arr.length-1;
            }
        
            
        
            document.getElementById("slider").innerHTML =`<img src="${arr[n]}"  heigth = "600px"; width = "100%";>`

       

        
     }

     document.getElementById(Prev())
     

   
     
