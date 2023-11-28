import React from 'react';
import {List} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import './SetOrderStyle.css';
const data = [
    {
        type: "Special",
        dailyRate: 42,
        description: 'Mystery Car Compact or Larger or Similar',
        icon_url: 'https://ctimg-fleet.cartrawler.com/mystery/car/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fmystery%2Fcar%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
        curOdometer: 100,
        overMileFee: 0.25,
    },
    {
        type: "Economy",
        dailyRate: 42,
        description: 'Kia Rio or Similar',
        icon_url: 'https://www.avis.com/content/dam/cars/s/2021/kia/2021-kia-soul-s-5door-hatchback-white_featured.png',
        curOdometer: 100,
        overMileFee: 0.25,
    },
    {
        type: "Compact",
        dailyRate: 42,
        description: 'Kia Soul or Similar',
        icon_url: 'https://ctimg-fleet.cartrawler.com/jeep/wrangler-sahara/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fjeep%2Fwrangler-sahara%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
        overMileFee: 0.25,
    },
    {
        type: "Midsize",
        dailyRate: 42,
        description: 'Nissan Sentra or Similar',
        icon_url: 'https://ctimg-fleet.cartrawler.com/mystery/car/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fmystery%2Fcar%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
        overMileFee: 0.25,
    },
    {
        type: "Standard",
        dailyRate: 42,
        description: 'Toyota Camry or Similar',
        icon_url: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
        overMileFee: 0.25,
    }
]


const VehicleDisplayCase = () => {
    return (
        <React.StrictMode>
            <div className="vehicleDisplayCase">
                <h1>Choose a car</h1>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem = {(item, index) => (
                        <List.Item
                            key={index}
                            extra={
                            <>
                                <h3>${`${item.dailyRate}/day`}</h3>
                                ${`${item.overMileFee}/mile over 500 miles`}
                            </>
                            }
                        >
                            <List.Item.Meta
                                avatar={<img src={item.icon_url} alt=""/>}
                                title={<a href="https://ant.design">{item.type}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </React.StrictMode>
    )
}

export default VehicleDisplayCase;