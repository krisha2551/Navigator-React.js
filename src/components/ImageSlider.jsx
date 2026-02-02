import { Carousel } from "react-bootstrap";

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Professional Team</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Modern Design</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
