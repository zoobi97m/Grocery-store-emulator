 var d = document.getElementById("t");
 var f = document.getElementById("s");
 var reciever = window.parent.document.getElementById("top_right_frame").contentWindow;
       
        function removeAllChildNodes(parent) 
        {
            while (parent.firstChild) 
            {
                parent.removeChild(parent.firstChild);
            }
        }
        function removeAllChildNodesEvent(e) 
        {
            
            while (f.firstChild) 
            {
                f.removeChild(f.firstChild);
            }
        }
        function frozenfoods(element)
        {
            if( d.hasChildNodes())
            {
                removeAllChildNodes(d);
            }
            var image = document.createElement('img');
            image.src = "frozen_food.png";
            image.useMap = "#frozen_food";
            image.height = 180;
            image.width = 600;
            var map = document.createElement('map');
            map.name = "frozen_food";

            var areas = [];
             
            for (let i=0;i<=3;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="35,43,177,131";
                    areas[i].id = "patties";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent)
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "201,43,320,131";
                    areas[i].id = "ffingers";
                    areas[i].addEventListener('mouseover',fishFingers);
                   
                    
                }
                else if(i==2){
                    areas[i].coords = "346,43,469,132";
                    areas[i].id = "prawn";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==3){
                    areas[i].coords = "493,43,614,131";
                    areas[i].id = "ice-cream";
                    areas[i].addEventListener('mouseover',iceCream);
                    
                }
                  
                map.appendChild(areas[i]); 
            }
            
            //document.body.insertBefore(image,d);
           //document.body.insertBefore(map,d);
       
              d.appendChild(map);
           d.appendChild(image);
           
           
            
        }
        
        function freshfoods(element)
        {
            if( d.hasChildNodes())
            {
                removeAllChildNodes(d);
            }
            var image_fresh= document.createElement('img');
            image_fresh.src = "fresh-food.png";
            image_fresh.useMap = "#fresh_food";
            image_fresh.height = 150;
            image_fresh.width = 775;
            var map_frsh = document.createElement('map');
            map_frsh.name = "fresh_food";

            var areas = [];
             
            for (let i=0;i<=6;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="18,21,118,95";
                    areas[i].id = "steak";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "143,22,246,98";
                    areas[i].id = "cheese";
                    areas[i].addEventListener('mouseover',cheddarCheese);
                }
                else if(i==2){
                    areas[i].coords = "271,22,373,97";
                    areas[i].id = "orange";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==3){
                    areas[i].coords = "397,22,498,95";
                    areas[i].id = "banana";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==4){
                    areas[i].coords = "524,22,624,96";
                    areas[i].id = "grapes";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                
                else if(i==5){
                    areas[i].coords = "649,22,748,97";
                    areas[i].id = "apples";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                
                else if(i==6){
                    areas[i].coords = "775,22,875,95";
                    areas[i].id = "peaches";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                  
                map_frsh.appendChild(areas[i]); 
            }
           
              d.appendChild(map_frsh);
           d.appendChild(image_fresh);
            
        }
        function beveragess(element)
        {
            if( d.hasChildNodes())
            {
                removeAllChildNodes(d);
            }
            var image_bev= document.createElement('img');
            image_bev.src = "beverage.png";
            image_bev.useMap = "#bev";
            image_bev.height = 150;
            image_bev.width = 500;
            var map_bev = document.createElement('map');
            map_bev.name = "bev";

            var areas = [];
             
            for (let i=0;i<=2;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="21,23,123,98";
                    areas[i].id = "coffee";
                    areas[i].addEventListener('mouseover',coffeee);
                }
                else if(i==1){
                    areas[i].coords = "148,24,265,98";
                    areas[i].id = "tea";
                    areas[i].addEventListener('mouseover',earlTea);
                }
                else if(i==2){
                    areas[i].coords = "289,24,391,100";
                    areas[i].id = "chocolate";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                
                
                  
                map_bev.appendChild(areas[i]); 
            }
           d.appendChild(map_bev);
           d.appendChild(image_bev);
            
        }
        
        function homeClean(element)
        {
            if( d.hasChildNodes())
            {
                removeAllChildNodes(d);
            }
            var image_hom= document.createElement('img');
            image_hom.src = "home-clen.png";
            image_hom.useMap = "#clen";
            image_hom.height = 150;
            image_hom.width = 700;
            var map_hom = document.createElement('map');
            map_hom.name = "clen";

            var areas = [];
             
            for (let i=0;i<=4;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="11,17,113,92";
                    areas[i].id = "soap";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "136,20,244,93";
                    areas[i].id = "wash";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==2){
                    areas[i].coords = "270,18,370,93";
                    areas[i].id = "panadol";
                    areas[i].addEventListener('mouseover',panadol);
                }
                else if(i==3){
                areas[i].coords = "394,19,495,92";
                    areas[i].id = "garbage";
                    areas[i].addEventListener('mouseover',garbage);
                }
                else if(i==4){
                    areas[i].coords = "519,19,620,91";
                    areas[i].id = "bleach";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                    
                }
                
                
                  
                map_hom.appendChild(areas[i]); 
            }
           
            
       
              d.appendChild(map_hom);
           d.appendChild(image_hom);
            
        }
        
        function petFood(element)
        {
            if( d.hasChildNodes())
            {
                removeAllChildNodes(d);
            }
            var image_pet= document.createElement('img');
            image_pet.src = "pet-food.png";
            image_pet.useMap = "#petty";
            image_pet.height = 130;
            image_pet.width = 770;
            var map_pet = document.createElement('map');
            map_pet.name = "petty";

            var areas = [];
             
            for (let i=0;i<=3;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="19,13,182,135";
                    areas[i].id = "bird";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "226,13,388,132";
                    areas[i].id = "cat";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==2){
                    areas[i].coords = "428,13,587,135";
                    areas[i].id = "dog";
                    areas[i].addEventListener('mouseover',dogFood);
                }
                else if(i==3){
                    areas[i].coords = "627,16,789,134";
                    areas[i].id = "fish";
                    areas[i].addEventListener('mouseover',removeAllChildNodesEvent);
                    areas[i].addEventListener('click', add_product);
                    
                }
               
                
                  
                map_pet.appendChild(areas[i]); 
            }
              d.appendChild(map_pet);
           d.appendChild(image_pet);
            
        }
        
        
        function fishFingers(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_ff= document.createElement('img');
            image_ff.src = "fish-finger.png";
            image_ff.useMap = "#fishy";
            image_ff.height = 130;
            image_ff.width = 650;
            var map_ff = document.createElement('map');
            map_ff.name = "fishy";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="131,17,235,92";
                    areas[i].id = "fishf_500_g";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "375,17,475,92";
                    areas[i].id = "fishf_1_kg";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_ff.appendChild(areas[i]); 
            }
              f.appendChild(map_ff);
           f.appendChild(image_ff);
            
        }
        
        function iceCream(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_ice= document.createElement('img');
            image_ice.src = "ice-cream-tubs.png";
            image_ice.useMap = "#icy";
            image_ice.height = 130;
            image_ice.width = 650;
            var map_ice = document.createElement('map');
            map_ice.name = "icy";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="89,13,189,89";
                    areas[i].id = "ice_cream_1l";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "328,12,431,89";
                    areas[i].id = "ice_cream_2l";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_ice.appendChild(areas[i]); 
            }
              f.appendChild(map_ice);
           f.appendChild(image_ice);
            
        }
        
        
        function cheddarCheese(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_cheese= document.createElement('img');
            image_cheese.src = "cheddar-cheese.png";
            image_cheese.useMap = "#cheesy";
            image_cheese.height = 130;
            image_cheese.width = 650;
            var map_cheese = document.createElement('map');
            map_cheese.name = "cheesy";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="100,10,203,87";
                    areas[i].id = "cheese500g";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "343,10,446,86";
                    areas[i].id = "cheese1kg";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_cheese.appendChild(areas[i]); 
            }
              f.appendChild(map_cheese);
           f.appendChild(image_cheese);
            
        }
        
        function coffeee(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_coffee= document.createElement('img');
            image_coffee.src = "coffee.png";
            image_coffee.useMap = "#coffey";
            image_coffee.height = 130;
            image_coffee.width = 650;
            var map_coffee = document.createElement('map');
            map_coffee.name = "coffey";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="132,13,250,90";
                    areas[i].id = "coffee200g";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "375,7,495,91";
                    areas[i].id = "coffee500g";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_coffee.appendChild(areas[i]); 
            }
              f.appendChild(map_coffee);
           f.appendChild(image_coffee);
            
        }
        
        function earlTea(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_tea= document.createElement('img');
            image_tea.src = "tea-bags.png";
            image_tea.useMap = "#teaa";
            image_tea.height = 130;
            image_tea.width = 750;
            var map_tea = document.createElement('map');
            map_tea.name = "teaa";

            var areas = [];
             
            for (let i=0;i<=2;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords = "37,21,149,138";
                    areas[i].id = "tea25";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "291,22,404,137";
                    areas[i].id = "tea100";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==2){
                    areas[i].coords = "545,21,657,138" ;
                    areas[i].id = "tea200";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_tea.appendChild(areas[i]); 
            }
              f.appendChild(map_tea);
           f.appendChild(image_tea);
            
        }
        
        function panadol(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_panadol= document.createElement('img');
            image_panadol.src = "panadol.png";
            image_panadol.useMap = "#medss";
            image_panadol.height = 130;
            image_panadol.width = 650;
            var map_panadol = document.createElement('map');
            map_panadol.name = "medss";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="128,9,233,87";
                    areas[i].id = "panadol24pack";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "370,11,475,87";
                    areas[i].id = "panadol50g";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_panadol.appendChild(areas[i]); 
            }
              f.appendChild(map_panadol);
           f.appendChild(image_panadol);
            
        }
        
        function garbage(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_garbage= document.createElement('img');
            image_garbage.src = "rubbish.png";
            image_garbage.useMap = "#zibala";
            image_garbage.height = 130;
            image_garbage.width = 650;
            var map_garbage = document.createElement('map');
            map_garbage.name = "zibala";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="106,8,214,91";
                    areas[i].id = "rubbish_pack10";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "342,10,453,90";
                    areas[i].id = "rubbish_pack50";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_garbage.appendChild(areas[i]); 
            }
              f.appendChild(map_garbage);
           f.appendChild(image_garbage);
            
        }
        
        function dogFood(element)
        {
            if( f.hasChildNodes() || d.hasChildNodes())
            {
                removeAllChildNodes(f);
            }
            var image_dog= document.createElement('img');
            image_dog.src = "dog-food.png";
            image_dog.useMap = "#kalb";
            image_dog.height = 130;
            image_dog.width = 650;
            var map_dog = document.createElement('map');
            map_dog.name = "kalb";

            var areas = [];
             
            for (let i=0;i<=1;i++)
            {
                areas[i] = document.createElement('area');
                areas[i].shape = "rect";
                areas[i].href = "#";
                if(i==0){
                    areas[i].coords ="109,22,242,147";
                    areas[i].id = "dog_1kg";
                    areas[i].addEventListener('click', add_product);
                }
                else if(i==1){
                    areas[i].coords = "408,24,537,149";
                    areas[i].id = "dog_5kg";
                    areas[i].addEventListener('click', add_product);
                }
            
               
                
                  
                map_dog.appendChild(areas[i]); 
            }
              f.appendChild(map_dog);
           f.appendChild(image_dog);
            
        }
        
        function add_product(event)
        {
            var message;
            
            var id_array = {1002:"patties", 1003:"prawn", 1000:"fishf_500_g", 1001:"fishf_1_kg", 1004:"ice_cream_1l", 1005:"ice_cream_2l",
            3002:"steak", 3003:"orange", 3004:"banana", 3006:"grapes", 3007:"apples", 3005:"peaches", 3000:"cheese500g", 3001:"cheese1kg", 4000:"tea25", 
            4001:"tea100", 4002:"tea200", 4003:"coffee200g", 4004:"coffee500g", 4005:"chocolate", 2002:"soap", 2005:"wash", 2006:"bleach", 2000:"panadol24pack",
            2001:"panadol50g", 2003:"rubbish_pack10", 2004:"rubbish_pack50", 5002:"bird", 5003:"cat", 5004:"fish", 5001:"dog_1kg", 5000:"dog_5kg"};
        
            for (const [key, value] of Object.entries(id_array)) 
            {
                 if (event.target.id == value)
                    message = key;
            }
            

            reciever.postMessage(message, "*");
        }
    
        var frozenStuff = document.getElementById("frozenn");
        frozenStuff.addEventListener('mouseover',frozenfoods);
        frozenStuff.addEventListener('mouseover',removeAllChildNodesEvent);
         
        
        var freshStuff = document.getElementById("fresh");
        freshStuff.addEventListener('mouseover',freshfoods);
        freshStuff.addEventListener('mouseover',removeAllChildNodesEvent);
        
        var beverage = document.getElementById("bevv");
        beverage.addEventListener('mouseover',beveragess);
         beverage.addEventListener('mouseover',removeAllChildNodesEvent);
        
        var homme = document.getElementById("home_health");
        homme.addEventListener('mouseover',homeClean);
        beverage.addEventListener('mouseover',removeAllChildNodesEvent);
        
        var pett = document.getElementById("pet_food");
        pett.addEventListener('mouseover',petFood);
         pett.addEventListener('mouseover',removeAllChildNodesEvent);






