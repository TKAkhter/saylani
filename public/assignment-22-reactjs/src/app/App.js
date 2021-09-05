import "./App.css";
import "@fontsource/roboto";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";
import Cards from "../components/Cards";

var items = [
  {
    id: 1,
    title: "My First Item",
    description: `This impressive paella is a perfect party dish and a fun meal to
  cook together with your guests. Add 1 cup of frozen peas along with
  the mussels, if you like.`,
    image: "./static/media/images/image1.jpg",
    date: "October 14, 2016",
    like: true,
  },
  {
    id: 2,
    title: "Another item",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nisi, fringilla sagittis imperdiet eu, laoreet at neque. Vivamus a sem et nulla egestas dignissim in eu libero. Praesent eget augue volutpat, commodo sapien ac, finibus felis.`,
    image: "./static/media/images/image2.jpg",
    date: "November 14, 2018",
    like: false,
  },
  {
    id: 3,
    title: "Third Item",
    description: `Ut sit amet elit at neque consectetur bibendum. Nunc varius orci vel magna congue, vel ultricies mauris hendrerit. Nunc vitae justo sed dolor consectetur mollis. Suspendisse vulputate elit augue, efficitur fermentum purus placerat et. Praesent in elit dignissim, volutpat diam sed, convallis nisl. Vestibulum vulputate odio at dui hendrerit tempor. Vestibulum risus turpis, consectetur ac faucibus nec, blandit vitae nisl. Pellentesque vel porttitor augue. Duis vel consequat purus. Maecenas id est nulla. Cras massa sapien, aliquam ac ante ac, vestibulum accumsan est. Morbi fermentum lacus ut vulputate pellentesque. Nam dapibus egestas ante, eu ornare nisl tincidunt at.`,
    image: "./static/media/images/image3.jpg",
    date: "December 14, 2016",
    like: true,
  },
  {
    id: 4,
    title: "Here is the Fourth",
    description: `Duis pellentesque sem nec est fringilla, vel dapibus diam tristique. Etiam fringilla massa orci, sit amet tincidunt felis tempor quis. Nulla at auctor ligula. Suspendisse potenti. Fusce blandit nibh nulla, ut viverra erat posuere id. Nam aliquet ac nisi eu sagittis. Nam luctus risus quis orci porta porta. Sed condimentum a elit sed blandit. Curabitur fringilla, dui et commodo laoreet, ante sem gravida eros, id maximus mauris est et ex. Morbi nec vehicula augue, et tincidunt sapien.`,
    image: "./static/media/images/image4.jpg",
    date: "September 14, 2020",
    like: false,
  },
  {
    id: 5,
    title: "High Five",
    description: `Praesent sagittis tincidunt velit, vel aliquet metus blandit faucibus. Duis at mollis dolor. Integer eget sollicitudin risus. Pellentesque id nibh enim. Suspendisse vel diam eu erat vehicula eleifend vel eu justo. Pellentesque egestas ante ac justo finibus facilisis sit amet eu tortor. Vivamus placerat molestie facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: "./static/media/images/image5.jpg",
    date: "June 10, 2016",
    like: true,
  },
  {
    id: 6,
    title: "Good Six",
    description: `Fusce sit amet velit neque. Sed lorem velit, euismod suscipit scelerisque feugiat, porttitor non leo. Sed dapibus volutpat sapien, eu pretium nisl ornare et. Nulla a ullamcorper nibh. Nulla a quam molestie, tincidunt nisl non, auctor tellus. Aliquam cursus malesuada ex vel sagittis. Proin arcu magna, vehicula at magna id, luctus hendrerit metus.

    Curabitur pharetra justo ex, non placerat est elementum nec. Donec pretium tincidunt libero sit amet tempor. Quisque libero tellus, suscipit ac aliquam a, gravida nec tellus. Fusce ultricies, dolor ac semper elementum, nibh magna lobortis nunc, in tincidunt arcu metus vel ligula. Phasellus mollis nisi metus, at ultrices enim bibendum venenatis. Vivamus dapibus mi at scelerisque rhoncus. Duis neque quam, bibendum non metus quis, bibendum varius diam. Nam varius elit ac sodales ornare.`,
    image: "./static/media/images/image6.jpg",
    date: "July 10, 2021",
    like: false,
  },
  {
    id: 7,
    title: "Serious Seven",
    description: `Suspendisse blandit vulputate rhoncus. Suspendisse congue consequat pharetra. Vivamus eleifend lobortis sapien, ac efficitur nunc facilisis iaculis. Suspendisse sapien lorem, sollicitudin et mi quis, tincidunt facilisis ipsum. Vestibulum in leo porta, feugiat neque eget, consequat massa. Fusce ultricies hendrerit turpis quis interdum. Fusce porta euismod nisi nec ornare.`,
    image: "./static/media/images/image7.jpg",
    date: "June 10, 2016",
    like: true,
  },
  {
    id: 8,
    title: "My First Item",
    description: `This impressive paella is a perfect party dish and a fun meal to
  cook together with your guests. Add 1 cup of frozen peas along with
  the mussels, if you like.`,
    image: "./static/media/images/image1.jpg",
    date: "October 14, 2016",
    like: true,
  },
  {
    id: 9,
    title: "Another item",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nisi, fringilla sagittis imperdiet eu, laoreet at neque. Vivamus a sem et nulla egestas dignissim in eu libero. Praesent eget augue volutpat, commodo sapien ac, finibus felis.`,
    image: "./static/media/images/image2.jpg",
    date: "November 14, 2018",
    like: false,
  },
  {
    id: 10,
    title: "Third Item",
    description: `Ut sit amet elit at neque consectetur bibendum. Nunc varius orci vel magna congue, vel ultricies mauris hendrerit. Nunc vitae justo sed dolor consectetur mollis. Suspendisse vulputate elit augue, efficitur fermentum purus placerat et. Praesent in elit dignissim, volutpat diam sed, convallis nisl. Vestibulum vulputate odio at dui hendrerit tempor. Vestibulum risus turpis, consectetur ac faucibus nec, blandit vitae nisl. Pellentesque vel porttitor augue. Duis vel consequat purus. Maecenas id est nulla. Cras massa sapien, aliquam ac ante ac, vestibulum accumsan est. Morbi fermentum lacus ut vulputate pellentesque. Nam dapibus egestas ante, eu ornare nisl tincidunt at.`,
    image: "./static/media/images/image3.jpg",
    date: "December 14, 2016",
    like: true,
  },
  {
    id: 11,
    title: "Here is the Fourth",
    description: `Duis pellentesque sem nec est fringilla, vel dapibus diam tristique. Etiam fringilla massa orci, sit amet tincidunt felis tempor quis. Nulla at auctor ligula. Suspendisse potenti. Fusce blandit nibh nulla, ut viverra erat posuere id. Nam aliquet ac nisi eu sagittis. Nam luctus risus quis orci porta porta. Sed condimentum a elit sed blandit. Curabitur fringilla, dui et commodo laoreet, ante sem gravida eros, id maximus mauris est et ex. Morbi nec vehicula augue, et tincidunt sapien.`,
    image: "./static/media/images/image4.jpg",
    date: "September 14, 2020",
    like: false,
  },
  {
    id: 12,
    title: "High Five",
    description: `Praesent sagittis tincidunt velit, vel aliquet metus blandit faucibus. Duis at mollis dolor. Integer eget sollicitudin risus. Pellentesque id nibh enim. Suspendisse vel diam eu erat vehicula eleifend vel eu justo. Pellentesque egestas ante ac justo finibus facilisis sit amet eu tortor. Vivamus placerat molestie facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: "./static/media/images/image5.jpg",
    date: "June 10, 2016",
    like: true,
  },
  {
    id: 13,
    title: "Good Six",
    description: `Fusce sit amet velit neque. Sed lorem velit, euismod suscipit scelerisque feugiat, porttitor non leo. Sed dapibus volutpat sapien, eu pretium nisl ornare et. Nulla a ullamcorper nibh. Nulla a quam molestie, tincidunt nisl non, auctor tellus. Aliquam cursus malesuada ex vel sagittis. Proin arcu magna, vehicula at magna id, luctus hendrerit metus.

    Curabitur pharetra justo ex, non placerat est elementum nec. Donec pretium tincidunt libero sit amet tempor. Quisque libero tellus, suscipit ac aliquam a, gravida nec tellus. Fusce ultricies, dolor ac semper elementum, nibh magna lobortis nunc, in tincidunt arcu metus vel ligula. Phasellus mollis nisi metus, at ultrices enim bibendum venenatis. Vivamus dapibus mi at scelerisque rhoncus. Duis neque quam, bibendum non metus quis, bibendum varius diam. Nam varius elit ac sodales ornare.`,
    image: "./static/media/images/image6.jpg",
    date: "July 10, 2021",
    like: false,
  },
  {
    id: 14,
    title: "Serious Seven",
    description: `Suspendisse blandit vulputate rhoncus. Suspendisse congue consequat pharetra. Vivamus eleifend lobortis sapien, ac efficitur nunc facilisis iaculis. Suspendisse sapien lorem, sollicitudin et mi quis, tincidunt facilisis ipsum. Vestibulum in leo porta, feugiat neque eget, consequat massa. Fusce ultricies hendrerit turpis quis interdum. Fusce porta euismod nisi nec ornare.`,
    image: "./static/media/images/image7.jpg",
    date: "June 10, 2016",
    like: true,
  },
  {
    id: 15,
    title: "My First Item",
    description: `This impressive paella is a perfect party dish and a fun meal to
  cook together with your guests. Add 1 cup of frozen peas along with
  the mussels, if you like.`,
    image: "./static/media/images/image1.jpg",
    date: "October 14, 2016",
    like: true,
  },
  {
    id: 16,
    title: "Another item",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nisi, fringilla sagittis imperdiet eu, laoreet at neque. Vivamus a sem et nulla egestas dignissim in eu libero. Praesent eget augue volutpat, commodo sapien ac, finibus felis.`,
    image: "./static/media/images/image2.jpg",
    date: "November 14, 2018",
    like: false,
  },
  {
    id: 17,
    title: "Third Item",
    description: `Ut sit amet elit at neque consectetur bibendum. Nunc varius orci vel magna congue, vel ultricies mauris hendrerit. Nunc vitae justo sed dolor consectetur mollis. Suspendisse vulputate elit augue, efficitur fermentum purus placerat et. Praesent in elit dignissim, volutpat diam sed, convallis nisl. Vestibulum vulputate odio at dui hendrerit tempor. Vestibulum risus turpis, consectetur ac faucibus nec, blandit vitae nisl. Pellentesque vel porttitor augue. Duis vel consequat purus. Maecenas id est nulla. Cras massa sapien, aliquam ac ante ac, vestibulum accumsan est. Morbi fermentum lacus ut vulputate pellentesque. Nam dapibus egestas ante, eu ornare nisl tincidunt at.`,
    image: "./static/media/images/image3.jpg",
    date: "December 14, 2016",
    like: true,
  },
  {
    id: 18,
    title: "Here is the Fourth",
    description: `Duis pellentesque sem nec est fringilla, vel dapibus diam tristique. Etiam fringilla massa orci, sit amet tincidunt felis tempor quis. Nulla at auctor ligula. Suspendisse potenti. Fusce blandit nibh nulla, ut viverra erat posuere id. Nam aliquet ac nisi eu sagittis. Nam luctus risus quis orci porta porta. Sed condimentum a elit sed blandit. Curabitur fringilla, dui et commodo laoreet, ante sem gravida eros, id maximus mauris est et ex. Morbi nec vehicula augue, et tincidunt sapien.`,
    image: "./static/media/images/image4.jpg",
    date: "September 14, 2020",
    like: false,
  },
  {
    id: 19,
    title: "High Five",
    description: `Praesent sagittis tincidunt velit, vel aliquet metus blandit faucibus. Duis at mollis dolor. Integer eget sollicitudin risus. Pellentesque id nibh enim. Suspendisse vel diam eu erat vehicula eleifend vel eu justo. Pellentesque egestas ante ac justo finibus facilisis sit amet eu tortor. Vivamus placerat molestie facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: "./static/media/images/image5.jpg",
    date: "June 10, 2016",
    like: true,
  },
  {
    id: 20,
    title: "Good Six",
    description: `Fusce sit amet velit neque. Sed lorem velit, euismod suscipit scelerisque feugiat, porttitor non leo. Sed dapibus volutpat sapien, eu pretium nisl ornare et. Nulla a ullamcorper nibh. Nulla a quam molestie, tincidunt nisl non, auctor tellus. Aliquam cursus malesuada ex vel sagittis. Proin arcu magna, vehicula at magna id, luctus hendrerit metus.

    Curabitur pharetra justo ex, non placerat est elementum nec. Donec pretium tincidunt libero sit amet tempor. Quisque libero tellus, suscipit ac aliquam a, gravida nec tellus. Fusce ultricies, dolor ac semper elementum, nibh magna lobortis nunc, in tincidunt arcu metus vel ligula. Phasellus mollis nisi metus, at ultrices enim bibendum venenatis. Vivamus dapibus mi at scelerisque rhoncus. Duis neque quam, bibendum non metus quis, bibendum varius diam. Nam varius elit ac sodales ornare.`,
    image: "./static/media/images/image6.jpg",
    date: "July 10, 2021",
    like: false,
  },
  {
    id: 21,
    title: "Serious Seven",
    description: `Suspendisse blandit vulputate rhoncus. Suspendisse congue consequat pharetra. Vivamus eleifend lobortis sapien, ac efficitur nunc facilisis iaculis. Suspendisse sapien lorem, sollicitudin et mi quis, tincidunt facilisis ipsum. Vestibulum in leo porta, feugiat neque eget, consequat massa. Fusce ultricies hendrerit turpis quis interdum. Fusce porta euismod nisi nec ornare.`,
    image: "./static/media/images/image7.jpg",
    date: "June 10, 2016",
    like: true,
  },
];

const App = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container maxWidth="lg" className="App">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          // Convert array to JSX items
          items.map(function (item) {
            return (
              <Cards
                like={item.like}
                key={item.id}
                title={item.title}
                image={item.image}
                date={item.date}
              >
                {item.description}
              </Cards>
            );
          })
        }
      </Masonry>
    </Container>
  );
};

export default App;
