# Mob-App

Clone the project from https://github.com/mjleehh/web-project-skeleton
Install node.js via https://nodejs.org/en/

Insert this cloned repository in the /react folder of the web-project-skeleton-master

install antd in this project via "npm install antd"

add this lines in file:   /react/webpack.config.js
{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
},

install FlipmMove for the list animation - type 
npm i -S react-flip-move
for installation


add the file loader via: $ npm install file-loader --save-dev

add {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      in your /react/webpack.config.js file
      
      and add this line in the demanded file where you want to use images
      import img from './file.png';
