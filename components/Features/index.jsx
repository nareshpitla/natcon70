import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import banner from "../../public/images/banner.png";
const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
          icon={banner}
            title="Greetings and warm welcome to all Anatomists of India and around the globe …
            From organizing committee.
            "
            paragraph=" We at Tomo Riba Institute of Health and Medical Sciences (TRIHMS) are delighted and honoured to announce that “70th NATCON 2023, a National Conference of Anatomical Society of India” will be organized by the Department of Anatomy, Tomo Riba Institute of Health and Medical Sciences (TRIHMS), Naharlagun, Arunachal Pradesh from 29th November to 2nd December 2023. "
paragraph2="The 70th NATCON 2023 will facilitate the podium for anatomists to swap their perspectives/outlooks on the transfigured concepts and advances of Anatomy. The delegates can utilize an opportunity to interconnect with the experts in Anatomy across the world regarding new strategies in academics, trends in research, and novel clinical relevance in anatomy. There will be various guest lectures, panel discussions, workshops, scientific research presentations, award paper presentations, and poster presentations. We welcome all eminent anatomists and colleagues with your family members to participate and make this event successful."
paragraph3="
Tomo Riba Institute of Health and Medical Sciences (TRIHMS), is the first Medical College of the Govt. of Arunachal Pradesh located at Naharlagun. The erstwhile Arunachal state Hospital named as Tomo Riba state Hospital as mark of respect to Late. Tomo Riba, the first generation of eminent people of the state and served the state from early 50’s to 2000 as student, community leader, social reformer, administrator, member of parliament. TRIHMS is a 500 bedded hospital and aimed to build an education centre of excellence in teaching as well as training to facilitate affordable care delivery with empathy, ethics, and excellence. 
"
paragraph4="Arunachal Pradesh “A Land of rising sun” and “Land of Dawn-lit-Mountains” is one of the world’s greatest biodiversity hotspots with high mountains, turbulent rivers, deep gorges, landscapes, rare wildlife species, more than 500 species of Orchids and hub of ancient cultures. Arunachal Pradesh was under NEFA (North Eastern Frontier Agency) region with Naharlagun as the capital, and became a state on 20th February 1987. Later on, capital was shifted to Itanagar, located only 8 kms from Naharlagun and later considered as Itanagar Capital Region (ICR). Geographically, ICR is a valley surrounded by beautiful green hills, rivers, waterfalls, and few natural lakes which is worth to see for its beauty and serenity, unmatched and less touched quality. Arunachal Pradesh is known also as Land of Rivers with beautiful clear water streams. Out of these Brahmaputra, Siang, Subansiri, Tirap, Siyom, Pare, Dikrong, Dibang, Kameng (Jia Bharoli) etc. Pare River forms the backbone of Naharlagun with lust green vegetations on its bank. Subansiri river sand was once upon a time place for golden flakes. Siang river is one of the best places for activities like trekking, rafting, and paragliding. Assam, the gateway to north east is world’s largest tea producing state with Guwahati as capital and the great Brahmaputra River is running like backbone of the north east. Kamakhya temple located at a peak in Narakashur hills at the centre of the city bears maximum concern to devotees from all over India and abroad. Kaziranga National Park, a world heritage site, and sanctuary famous for single horned rhinoceros. "
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
