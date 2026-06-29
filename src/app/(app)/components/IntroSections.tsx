import Image from "next/image";

const dispatchServicePoints = [
  { num: "01.", text: "Goal-Oriented Approach" },
  { num: "02.", text: "Your Dedicated Box Truck Dispatcher" },
  { num: "03.", text: "Search For The Best Loads And Rates" },
  { num: "04.", text: "Meaningful Negotiations" },
  { num: "05.", text: "Paperwork Service For Box Truck" },
];

export default function IntroSections() {
  return (
    <>
      <div className="bb-blog-001">
        {/* Section: Experts in Dispatching Box Trucks Help You Grow */}

        <div className="bb-intro-sections-001" />

        <div className="bb-intro-sections-002">
          Experts in Dispatching Box Trucks Help You Grow
        </div>

        <div className="bb-intro-sections-003">
          Having 15 years of experience in freight brokerage, we are very much
          aware of the benefits you can derive from owning or leasing a box
          truck.&nbsp;
          <br />
          This type of equipment, also sometimes known as straight truck, comes
          with better maneuverability and lower gas mileage than those of
          semi-trucks, which makes it a perfect choice for local runs.
        </div>

        <Image
          className="bb-intro-sections-004"
          src="/Images/Rectangle 1080.webp"
          alt="Red Box Truck"
          width={960}
          height={660}
        />

        {/* Section: Box Truck Dispatchers for Owner Operators & Fleet Owners */}

        <Image
          className="bb-intro-sections-005"
          src="/Images/Rectangle 1082.webp"
          alt="Owner Operator Driver"
          width={960}
          height={660}
        />

        <div className="bb-intro-sections-006" />

        <div className="bb-intro-sections-007">
          Box Truck Dispatchers for Owner Operators &amp; Fleet Owners
        </div>

        <div className="bb-intro-sections-008">
          However, we also know that local delivery and relocations are not the
          only way for you to make money with your box truck. After all, the
          demand for moving services and goods delivery can be sporadic in your
          location, and you will need to fill in the gaps in order to receive a
          steady income.
          <br />
          But if entrusting the development of your business to our box truck
          dispatch company, you will be able to enjoy long-haul trips as well and
          add them to a continuous string of loads found by Resolute Logistics on
          your behalf.&nbsp;
          <br />
          To get more business even on a bad day, apply for straight truck
          dispatch service with us.
          <br />
        </div>

        {/* Section: Why Resolute Logistics? */}

        <div className="bb-intro-sections-009" />

        <div className="bb-intro-sections-010">Why Resolute Logistics?</div>

        <div className="bb-intro-sections-011">
          While box truck prices are quite affordable to start your own business
          and the operational costs are usually lower than expenditures associated
          with semi-trucks, you should keep in mind tough competition on the
          market: this accessibility means many other truckers are eager to start
          their business and make money.
          <br />
          Besides, box trucks cannot compete with semi-trailers in load capacity
          and cargo room flexibility, making many shippers give preference to the
          latter option and, thus, limiting your earning opportunities. These are
          all why it might be tricky to even find dispatching companies for box
          trucks.
          <br />
          Resolute Logistics, however, are happy to work with all non-local box
          truck owners and all drivers of straight box trucks having 26 ft or more
          in length and equipped with a lift gate. We are pros in dispatching box
          trucks, and you can leave all “back office” aspects to us!
          <br />
        </div>

        <Image
          className="bb-intro-sections-012"
          src="/Images/Rectangle 1084.webp"
          alt="Warehouse Coordination"
          width={960}
          height={660}
        />
      </div>

      <section data-responsive-section="intro" className="bb-intro-sections-021">
        <div className="bb-intro-sections-022">
          <div className="bb-intro-sections-023">
            <div>
              <h2 className="bb-intro-sections-024">
                Experts in Dispatching Box Trucks Help You Grow
              </h2>
              <p className="bb-intro-sections-025">
                Having 15 years of experience in freight brokerage, we are very
                much aware of the benefits you can derive from owning or leasing
                a box truck. This type of equipment, also sometimes known as
                straight truck, comes with better maneuverability and lower gas
                mileage than semi-trucks.
              </p>
            </div>

            <Image
              className="bb-intro-sections-026"
              src="/Images/Rectangle 1080.webp"
              alt="Red Box Truck"
              width={960}
              height={660}
            />
          </div>
        </div>

        <div className="bb-intro-sections-027">
          <div className="bb-intro-sections-023">
            <Image
              className="bb-intro-sections-028"
              src="/Images/Rectangle 1082.webp"
              alt="Owner Operator Driver"
              width={960}
              height={660}
            />

            <div className="bb-intro-sections-029">
              <h2 className="bb-intro-sections-024">
                Box Truck Dispatchers for Owner Operators &amp; Fleet Owners
              </h2>
              <p className="bb-intro-sections-025">
                If entrusting the development of your business to our box truck
                dispatch company, you will be able to enjoy long-haul trips and
                add them to a continuous string of loads found by Resolute
                Logistics on your behalf.
              </p>
            </div>
          </div>
        </div>

        <div className="bb-intro-sections-027">
          <div className="bb-intro-sections-023">
            <div>
              <h2 className="bb-intro-sections-024">
                Why Resolute Logistics?
              </h2>
              <p className="bb-intro-sections-025">
                We are happy to work with non-local box truck owners and drivers
                of straight box trucks having 26 ft or more in length and
                equipped with a lift gate. You can leave all back-office aspects
                to us.
              </p>
            </div>

            <Image
              className="bb-intro-sections-026"
              src="/Images/Rectangle 1084.webp"
              alt="Warehouse Coordination"
              width={960}
              height={660}
            />
          </div>
        </div>
      </section>

      {/* Single shared full-range section for both desktop and mobile */}
      <section className="bb-intro-shared-range-001">
        <Image
          className="bb-intro-shared-range-002"
          src="/Images/Rectangle 1078.webp"
          alt="Full Range of Dispatch Services"
          width={1920}
          height={610}
        />

        <div className="bb-intro-shared-range-003" />

        <div className="bb-intro-shared-range-004">
          <div>
            <h2 className="bb-intro-shared-range-005">
              We provide a full range of dispatch services for straight box trucks
              having 26 ft or more in length.
            </h2>

            <p className="bb-intro-shared-range-006">
              We are pros in dispatching box trucks, and you can leave all
              back-office aspects to us!
            </p>
          </div>

          <div className="bb-intro-shared-range-007">
            {dispatchServicePoints.map((item) => (
              <div key={item.num} className="bb-intro-shared-range-008">
                <span className="bb-intro-shared-range-009">{item.num}</span>
                <h3 className="bb-intro-shared-range-010">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
