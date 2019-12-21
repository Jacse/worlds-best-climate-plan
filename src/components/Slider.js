import React from 'react';
import useDimensions from '../lib/useDimensions';

const Slider = ({ size, pos }) => {
  const [ref, { height }] = useDimensions();
  // Using SVG rather than react-rough to keep same look
  // when re-rendering on position change
  return (
    <div ref={ref}>
      <svg width="10" height={height} viewBox="0 0 10 458">
        <g>
          <path
            d="M4.1327883835508885 -1.3367590895685924 C3.8659196561158797 99.26466313723726, 4.695780655662444 198.36734403921423, 4.4411074530914 455.5954867795201 M5.870006377041969 -0.26970619410630725 C2.6302712003975204 140.06879376874096, 2.8740442255101284 282.39053909791915, 5.211696247158928 456.6699278911806"
            stroke="black"
            strokeWidth={1}
          ></path>
        </g>
        <g transform={`translate(0 ${(pos - 0.5) * height})`}>
          <path
            d="M4.259134285759731 224.75713664288122 C5.2021281676290405 224.5864335317978, 6.193520255338213 223.95396686977725, 6.9974946101009365 224.3894380590686 C7.80146896486366 224.82490924835994, 8.624124290634496 226.2854938337256, 9.08298041433607 227.36996377862926 C9.541836538037645 228.4544337235329, 10.098958364472944 230.0040006656787, 9.750631352310384 230.89625772849053 C9.402304340147824 231.78851479130236, 7.8008301692666535 232.10301880477633, 6.993018341360706 232.72350615550025 C6.185206513454759 233.34399350622417, 5.679702873226512 234.71628478257273, 4.903760384874699 234.61918183283402 C4.127817896522886 234.5220788830953, 2.9764925893786613 233.10750996341508, 2.33736341124983 232.14088845706803 C1.6982342331209987 231.17426695072098, 1.4170069187325651 229.95911065639427, 1.0689853161017124 228.81945279475164 C0.7209637134708597 227.679794933109, -0.26066154170408906 226.16522518929713, 0.24923379546471391 225.3029412872122 C0.7591291326335169 224.44065738512728, 3.40219040867941 223.76987682880647, 4.1283573391145305 223.64574938224212 C4.854524269549651 223.52162193567776, 4.724498318052169 224.57880998393375, 4.606235378075437 224.558176607826 M7.435306614561187 222.77504292033882 C8.358336869493579 223.0786648945087, 8.734115786604526 225.66283457088218, 9.185400237110603 226.6650312754218 C9.636684687616679 227.6672279799614, 10.11587868372599 227.82751742152846, 10.143013317597639 228.78822314757653 C10.170147951469287 229.7489288736246, 10.100397217061717 231.70370317358632, 9.348208040340499 232.4292656317102 C8.59601886361928 233.15482808983407, 7.045783046710198 232.8684221974136, 5.629878257270328 233.1415978963198 C4.213973467830459 233.41477359522602, 1.6254872680991617 234.38976573594525, 0.8527793037012805 234.06831982514754 C0.08007133930339938 233.74687391434983, 0.9875745023716954 232.55538233719403, 0.9936304708830415 231.21292243153357 C0.9996864393943875 229.8704625258731, 0.36670615101670867 227.413339227482, 0.889115114769357 226.0135603911848 C1.4115240785220053 224.6137815548876, 3.1466255251856827 223.07864436702624, 4.1280842533989315 222.8142494137504 C5.10954298161218 222.54985446047453, 6.454123691942315 224.15899545373412, 6.77786748404885 224.42719067152962 C7.101611276155386 224.6953858893251, 6.353651826498254 224.32376046615957, 6.070547006038145 224.4234207205234"
            stroke="none"
            strokeWidth={0}
            fill="red"
          ></path>
          <path
            d="M4.833063940204355 224.35885451365462 C5.785365870685451 223.9275718017259, 6.17868031585824 223.7051130966645, 7.094498232414578 224.14040335356802 C8.010316148970915 224.57569361047155, 9.939262627999327 225.8786168496859, 10.327971439542383 226.97059605507582 C10.716680251085439 228.06257526046574, 9.8341476698122 229.59535940076765, 9.426751101672913 230.69227858590745 C9.019354533533626 231.78919777104724, 8.617602425684073 233.15612563576886, 7.883592030706659 233.55211116591462 C7.149581635729244 233.9480966960604, 6.2097769730992365 233.34283061211494, 5.022688731808424 233.0681917667821 C3.8356004905176118 232.79355292144925, 1.4693669074343587 232.52326671455864, 0.7610625829617863 231.90427809391758 C0.05275825848921378 231.28528947327652, 0.5864804469300785 230.39021788976174, 0.7728627849729888 229.35426004293575 C0.959245123015899 228.31830219610976, 1.2976188408700016 226.55059159804824, 1.8793566112192477 225.68853101296153 C2.461094381568494 224.82647042787482, 3.5837710791483626 224.55049121418608, 4.263289407068465 224.18189653241555 C4.942807734988567 223.81330185064502, 6.001402232955708 223.44888879392448, 5.95646657873986 223.47696292233826 M3.9910653157702756 223.51745299350517 C4.578926818079809 223.50473536975477, 4.990235496521477 225.13955101219065, 5.8341945110392315 225.54802235761542 C6.678153525556986 225.9564937030402, 8.3139982875254 225.29295798675963, 9.054819402876806 225.9682810660538 C9.795640518228211 226.64360414534798, 10.439189206918929 228.38178365213685, 10.27912120314766 229.5999608333805 C10.119053199376392 230.81813801462414, 8.772202864122228 232.70792990788703, 8.0944113802492 233.2773441535157 C7.416619896376172 233.8467583991444, 7.444540024108768 233.13092816037752, 6.212372299909496 233.0164463071525 C4.980204575710223 232.9019644539275, 1.4501269153052485 233.08206343396205, 0.7014050350535661 232.5904530341656 C-0.04731684519811641 232.09884263436913, 1.6825586712843421 231.26965918022154, 1.7200410183994004 230.0667839083737 C1.7575233655144586 228.86390863652588, 0.4505753875354581 226.38928840461054, 0.9262991177439153 225.37320140307858 C1.4020228479523724 224.35711440154662, 4.025724618614502 223.92669936676407, 4.574383399650143 223.97026189918202 C5.123042180685784 224.01382443159997, 4.357529412109689 225.28636734816126, 4.218251803957765 225.63457659758626"
            stroke="red"
            strokeWidth={1}
            fill="none"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Slider;
