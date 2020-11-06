import React from "react";
import { Tab, Tabs, Table } from "react-bootstrap";

const Description = () => {
  return (
    <Tabs
      defaultActiveKey="description"
      className="product-tab border-bottom-0 border-top mt-3"
    >
      <Tab eventKey="description" title="Description">
        <h6 className="font-italic">
          Meet iPhone 11. All-new dual-camera system with Ultra Wide and Night
          mode. All-day battery. Six new colors. And the A13 Bionic, our fastest
          chip ever.
        </h6>
        <h6>
          Six stunning new colors. Gorgeous 6.1-inch all-screen Liquid Retina
          LCD.2 Water resistant up to 2 meters for 30 minutes.
        </h6>
        <h6>
          <b>Cameras:</b>
        </h6>
        <h6>
          <b>Ultra Wide (13 mm). </b>
          <span>120° field of view for four times more scene.</span>
        </h6>
        <h6>
          <b>Wide (26 mm). </b>
          <span>
            100% Focus Pixels for up to three times faster autofocus in low
            light.
          </span>
        </h6>
        <h6>
          4K video at 60 fps on every camera. Ultra Wide camera for four times
          more scene. Rotate, crop, and add filters as easily as you do with
          photos.
        </h6>
        <h6>
          All-day battery life.1 A13 Bionic, the fastest chip in a smartphone.
          Fast-charge capable with an 18W adapter (sold separately).
        </h6>
        <h6>
          <b>Privacy is built in</b>
          <br />
          <span>
            Face ID is the most secure facial authentication in a smartphone. It
            doesn’t store or share your photo. And it’s more secure than Touch
            ID.
          </span>
        </h6>
      </Tab>
      <Tab eventKey="additionInformation" title="Additional information">
        <Table striped bordered className="mt-3">
          <tbody>
            <tr>
              <td className="font-weight-bold">Storage</td>
              <td>64GB, 128GB, 256GB</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Color</td>
              <td>Black, White, Red, Purple, Green, Yellow</td>
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
};

export default Description;
