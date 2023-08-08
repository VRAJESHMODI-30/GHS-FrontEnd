import React, { useState } from 'react';
import '../Styles/ReadMore.css';

function ReadMore(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleReadMoreClick() {
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            {props.productName.search(/Hydraulic\sPress\sMachine/) !== -1 &&
                <div className='paraCard rounded'>
                    <p>
                        A hydraulic press is a mechanical tool that shapes, deforms, and arranges various kinds of metals, plastics, rubber, and wood using the static pressure of a liquid. The mainframe, power system, and controls complete a hydraulic press's mechanism. According to Pascal's principle, a confined liquid experiences a pressure shift when pressure is applied to it. In a hydraulic press, a piston that functions as a pump to generate mechanical force applies pressure to a liquid. Because of their excellent efficiency and adaptability, hydraulic press machines are widely used in various sectors.</p>
                    <div className={`read-more-content ${isExpanded ? 'expanded' : ''}`}>
                        <div id="hidden-content">
                            <p>These machines are specifically made to produce enormous force using hydraulic fluids, which makes them ideal for applications that require high pressure levels. The C-frame press, H-frame press, and four-column press are only a few examples of the different types of hydraulic press machines. It has several advantages, including high accuracy, low noise, and adaptability. We Believe, Modern industrial processes cannot function without hydraulic press machines.
                            </p>
                            <p>We offer a range of high-performance Hydraulic Press With a variety of choices available from 5T to 1000T to fit your workplace, we provide bespoke hydraulic press machines designed to meet your practical demands.</p>
                        </div>
                    </div>
                    <button id="read-more" onClick={handleReadMoreClick}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            }
            {props.productName.search(/Hydraulic Cylinder/) !== -1 &&
                <div className='paraCard rounded'>
                    <p>
                        Hydraulic Cylinders are an integral constituent of the hydraulic industry, Hydraulic cylinders are linear actuators that enable the automatic generation of either a pushing or pulling force in a straight line. Nothing can offer the necessary force like hydraulic cylinders when in need of power. The mainstay of the lifting and construction, hydroelectric, capital equipment, railway, maritime, machine tools, aerospace, paper mill, and public works industries, hydraulic cylinders come in a variety of sizes depending on the material, operating pressure, end cap connection techniques, temperature, and wall thickness of the tube or end caps.
                    </p>
                    <div className={`read-more-content ${isExpanded ? 'expanded' : ''}`}>
                        <p id="hidden-content">
                            One incredible benefit of hydraulic cylinders is that they can provide a lot of power to machines in even the furthest locations away from the power generation source. Generally, power sources can be turbines, diesel engines and electric motors. The power-to-weight and power-to-size ratios of these cylinders are very efficient as well. They also have variable speed control, automatic overload protection and positioning benefits. Hydraulic cylinders are especially valuable when you need to use them in extreme environments.
                        </p>
                    </div>
                    <button id="read-more" onClick={handleReadMoreClick}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            }
            {props.productName.search(/Hydraulic\sPower\sUnit/) !== -1 &&
                <div className='paraCard rounded'>
                    <p>
                        A hydraulic power unit, also known as a hydraulic power pack, is an independent device that typically consists of a motor, a fluid reservoir, and a pump. It operates by delivering the hydraulic pressure required to power motors, cylinders, and other auxiliary components of a specific hydraulic system.
                    </p>
                    <p>
                        The design of a substantial, robust hydraulic power unit will differ significantly from that of a standard pumping system in a number of ways. It will be made to operate in a variety of environmental situations. Among the common design elements are:
                    </p>
                    <div className={`read-more-content ${isExpanded ? 'expanded' : ''}`}>
                        <p id="hidden-content">
                            <u><strong>Accumulators:</strong></u>  These are storage compartments that may be connected to hydraulic actuators. In addition to the motor pumping system, they are designed to produce and sustain fluid pressure by collecting water from the pumping mechanism.
                        </p>
                        <p id="hidden-content">
                            <u><strong>Motor Pumps:</strong></u>  A hydraulic power unit may include a single motor pump or a number of components, each with an accumulator valve. One pump typically runs at a time in a system with numerous pumps.

                        </p>
                        <p id="hidden-content">
                            <u><strong> Tanks:</strong></u> A tank is a storage container with a capacity large enough for the liquid in the pipes to drain into. Similar to that, actuator fluid occasionally may need to be drained into the tank.
                        </p>
                        <p id="hidden-content">
                            <u> <strong> Filters:</strong></u> A filter is usually mounted along the tank's top. It is an independent bypass unit with a built-in motor, pump, and filtration system. It may be used to open a multi-directional valve, which can then be used to fill or empty the tank. Filters may frequently be replaced while the power unit is running since they are self-contained.
                        </p>
                        <p id="hidden-content">
                            <u> <strong>Coolers and Heaters:</strong></u> To keep temperatures from exceeding acceptable levels, an air cooler can be put next to or behind the filter unit as part of the temperature regulating procedure. In the same way, temperatures may be raised as necessary by using a heating system, such as an oil-based heater.

                        </p>
                        <p id="hidden-content">
                            <u><strong> Power Unit Controllers:</strong></u> The operator interface, which includes power switches, displays, and monitoring functions, is the hydraulic controller unit. It is often found hooked into the power unit and is required for the installation and integration of a power unit into a hydraulic system.

                        </p>
                        <p>
                            We offer a range of high-performance Hydraulic Power Units With a variety of choices available from 5T to 1000T to fit your workplace, we provide bespoke Hydraulic Power Units designed to meet your practical demands.
                        </p>
                    </div>
                    <button id="read-more" onClick={handleReadMoreClick}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            }
        </>
    );
}

export default ReadMore;
