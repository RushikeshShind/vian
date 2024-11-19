import Shield from 'icons/lineal/Shield';
import Design from 'icons/lineal/Design';
import Target from 'icons/lineal/Target';
import Wallet from 'icons/lineal/Wallet';
import ChatTwo from 'icons/lineal/ChatTwo';
import Loyalty from 'icons/lineal/Loyalty';
import Padlock from 'icons/lineal/Padlock';
import AwardTwo from 'icons/lineal/AwardTwo';
import CheckList from 'icons/lineal/CheckList';
import Insurance from 'icons/lineal/Insurance';
import Telephone from 'icons/lineal/Telephone';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import LightBulb from 'icons/lineal/LightBulb';
import PieChartTwo from 'icons/lineal/PieChartTwo';
import CloudComputingTwo from 'icons/lineal/CloudComputingTwo';
import color from 'utils/color';
const serviceList = [{
  id: 1,
  Icon: Telephone,
  color: color.blue,
  title: 'Vision',
  description: `To be a leading global provider of innovative turnkey solutions, delivering projects that redefine excellence andinspire trust. We aim to set new benchmarks in quality, sustainability, and efficiency, transforming ideas into lastinglegacies while empowering our clients to achieve their goals effortlessly.`
}, {
  id: 2,
  Icon: Shield,
  color: color.yellow,
  title: 'About',
  description: `At VIAN, we specialize in delivering end-to-end turnkey solutions that transform your vision into reality. With yearsof experience in managing diverse turnkey projects, we take pride in offering comprehensive services—from initialdesign and planning to full-scale execution and final delivery. 
`
}, 
{
  id: 3,
  Icon: Shield,
  color: color.yellow,
  title: 'Mission',
  description: `To deliver exceptional turnkey solutions through a commitment to quality, innovation, and customer satisfaction.We strive to simplify complex projects by managing every phase with expertise and integrity, ensuring timelycompletion, cost-effectiveness, and seamless execution.
`
},];
const processList = [{
  id: 1,
  Icon: LightBulb,
  title: 'Collect Ideas',
  description: 'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.'
}, {
  id: 2,
  Icon: PieChartTwo,
  title: 'Data Analysis',
  description: 'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
}, {
  id: 3,
  Icon: Design,
  title: 'Magic Touch',
  description: 'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
}];
const abouts = [{
  id: 1,
  Icon: Target,
  color: color.blue,
  title: 'Our Vision',
  description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`
}, {
  id: 2,
  Icon: AwardTwo,
  color: color.green,
  title: 'Our Mission',
  description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`
}, {
  id: 3,
  Icon: Loyalty,
  color: color.yellow,
  title: 'Our Values',
  description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
}];
const pricingList = [{
  price: 9,
  plan: 'Basic',
  features: ['2 Projects', '100K API Access', '100MB Storage', 'Weekly Reports', '7/24 Support']
}, {
  price: 19,
  plan: 'Premium',
  features: ['5 Projects', '200K API Access', '300MB Storage', 'Weekly Reports', '7/24 Support']
}, {
  price: 29,
  plan: 'Corporate',
  features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
}, {
  price: 49,
  plan: 'Community',
  features: ['90 Projects', '900K API Access', '900MB Storage', 'Weekly Reports', '7/24 Support']
}];
const faqList = [{
  id: 1,
  Icon: CheckList,
  title: 'Can I cancel my subscription?',
  description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
}, {
  id: 2,
  Icon: Wallet,
  title: 'Which payment methods do you accept?',
  description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
}, {
  id: 3,
  Icon: Insurance,
  title: 'How can I manage my Account?',
  description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
}, {
  id: 4,
  Icon: Padlock,
  title: 'Is my credit card information secure?',
  description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
}];
export default {
  serviceList,
  processList,
  abouts,
  pricingList,
  faqList
};