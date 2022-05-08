import { LightModeColors } from '../../helpers/styles/colors'
import classes from "./logo.module.scss"

export const Logo = () => {
    return (
        < svg
            className={classes.svg}
            viewBox="0 0 197.34604 195.58141"
            version="1.1"
            id="svg5"
        >
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color={LightModeColors.oceanBlue} />
                    <stop offset="25%" stop-color={LightModeColors.paleGreen} />
                    <stop offset="50%" stop-color={LightModeColors.sorbusRed} />
                    <stop offset="75%" stop-color={LightModeColors.orange} />
                    <stop offset="100%" stop-color={LightModeColors.oceanBlue} />
                    <animateTransform attributeName="gradientTransform"
                        type="translate"
                        from="-1 0"
                        to="1 0"
                        begin="0s"
                        dur="1.5s"
                        repeatCount="indefinite"
                    />
                </linearGradient>
            </defs>
            <g
                id="layer1"
                transform="translate(-6.6111054,-57.74314)"
            >
                <path
                    id="path2293"
                    fill='url(#linear)'
                    d="m 120.55554,107.60568 c -0.60319,-0.008 -1.27778,0.0539 -1.81595,0.18725 -2.3231,0.56399 -5.11273,2.14283 -7.94709,4.48079 -4.46683,3.69152 -9.57074,9.33157 -14.387337,15.92502 -3.228995,4.41957 -6.502533,9.41325 -9.453475,14.42756 -0.475377,0.81007 -0.87911,1.46666 -0.914988,1.46666 -0.0269,0 -0.636685,-0.3693 -1.345273,-0.83074 -7.444624,-4.73744 -15.481391,-7.80353 -22.961901,-8.75717 -6.404175,-0.81008 -11.687034,-0.14334 -15.516979,1.95877 -2.601136,1.42534 -4.538692,3.43472 -5.597084,5.78293 -0.825185,1.83551 -1.076419,3.26129 -1.013631,5.63 0.0359,1.47661 0.08097,1.86592 0.323138,2.93235 0.627858,2.70711 2.197547,5.54769 4.215669,7.61906 4.099029,4.19396 9.776436,7.18819 17.230036,9.08522 1.946366,0.4922 4.906442,1.09705 6.440216,1.30214 0.502286,0.0718 0.91499,0.1644 0.91499,0.20542 0,0.10254 -3.14853,3.54796 -4.26074,4.65542 -6.753985,6.737 -13.283742,10.62296 -19.051085,11.34076 -1.130144,0.13329 -3.94633,0.0822 -5.211019,-0.11255 -2.870214,-0.42043 -5.337169,-1.40496 -7.337348,-2.90208 -2.080908,-1.55863 -3.193067,-3.32241 -3.390394,-5.36301 -0.07175,-0.77932 0.08985,-2.23527 0.340996,-2.98382 0.708582,-2.1739 2.67287,-3.68114 5.35473,-4.08106 3.471166,-0.53322 6.897687,0.26651 12.252441,2.85058 l 1.156916,0.56376 0.457495,-0.15343 c 0.672703,-0.2256 0.833981,-0.39008 1.165846,-1.16941 0.322902,-0.76906 0.322902,-0.87142 0,-1.88659 -0.125573,-0.38966 -0.215188,-0.47172 -1.2377,-1.09723 -3.345599,-2.08161 -7.121624,-3.4661 -11.005386,-4.03009 -1.749037,-0.2666 -4.718167,-0.31762 -6.234004,-0.11254 -5.336811,0.70754 -8.879412,3.54807 -9.928831,7.9779 -0.278051,1.15873 -0.296236,3.53757 -0.03614,4.69629 0.636829,2.86093 2.197557,5.11679 5.058806,7.31119 2.968881,2.27643 6.888432,3.83527 11.283455,4.48129 6.682218,0.98441 13.283744,-0.041 20.082574,-3.10697 1.856672,-0.84085 5.256303,-2.74827 7.086068,-3.96852 4.323264,-2.90194 8.87946,-6.91124 12.826008,-11.28978 l 1.076561,-1.1896 3.318537,-0.0616 c 3.390444,-0.0718 4.547548,-0.14374 6.278647,-0.44111 1.148089,-0.19483 1.32747,-0.28679 1.78491,-0.86104 0.322901,-0.41016 0.331885,-0.44088 0.278069,-1.00486 -0.125571,-1.31254 -0.134736,-1.33323 -0.520423,-1.70238 -0.636827,-0.5845 -0.582626,-0.57445 -2.807044,-0.47191 -3.130331,0.14355 -4.700377,0.18484 -4.700377,0.11306 0,-0.0308 0.412744,-0.63598 0.906061,-1.34352 1.793886,-2.52254 4.242429,-6.29618 6.126009,-9.4032 l 0.690919,-1.1482 0.780207,0.56375 c 1.856672,1.37407 5.534051,4.46061 7.058854,5.94746 l 0.43071,0.41033 -0.27807,1.43538 c -0.645798,3.31212 -0.870246,5.74262 -0.798488,8.55226 0.143508,5.5988 1.56971,10.2951 4.305389,14.20195 0.69065,0.97414 2.32308,2.79954 3.38149,3.77369 1.04046,0.95364 2.78064,2.28648 3.54305,2.69665 1.86566,1.02541 2.78075,-0.1125 3.2382,-4.06037 0.21528,-1.8355 0.2242,-6.93225 0.009,-8.73698 -0.7086,-6.03973 -2.54726,-11.08444 -5.92877,-16.25256 -0.37671,-0.57425 -0.68198,-1.0872 -0.68198,-1.14872 0,-0.14356 2.11689,-6.55212 3.91976,-11.85354 1.95535,-5.7526 4.93315,-14.25338 7.42668,-21.17498 3.36356,-9.35183 5.19344,-14.67403 5.69573,-16.60182 0.37672,-1.40482 0.10779,-2.59421 -0.69049,-3.04541 -0.25115,-0.14356 -0.7829,-0.22043 -1.3861,-0.22813 z m 13.58581,0.78634 c -0.14386,-0.008 -0.29542,0.0115 -0.45495,0.0585 h -4.3e-4 c -1.32075,0.38315 -4.82049,2.98701 -6.09667,4.53379 -0.31208,0.38315 -0.56294,0.93685 -0.56294,1.27035 0,0.30509 0.13972,0.65948 0.41838,1.06391 1.12571,1.63901 1.76647,6.36444 1.68286,12.43799 -0.0334,2.25631 -0.0611,3.31358 -0.20621,6.80447 -0.0278,0.78047 -0.095,2.37686 -0.13946,3.54758 -0.0444,1.17072 -0.10572,2.69632 -0.13903,3.38457 -0.0278,0.69534 -0.0785,1.8162 -0.11183,2.48316 -0.0278,0.67406 -0.0782,1.78838 -0.11139,2.46953 -0.0334,0.68114 -0.0945,2.08569 -0.13903,3.1216 -0.0445,1.03592 -0.1116,2.41984 -0.13946,3.08679 -0.0334,0.65987 -0.0836,1.71695 -0.1114,2.34134 -0.0333,0.62438 -0.0949,1.95112 -0.13946,2.94446 -0.0448,0.99335 -0.10558,2.32711 -0.13903,2.95859 -0.11691,2.36984 -0.16749,3.42036 -0.22322,4.52722 -0.0333,0.62439 -0.0945,1.95113 -0.13904,2.94447 -0.0448,0.99334 -0.10615,2.28439 -0.13946,2.87329 -0.0278,0.58181 -0.0782,1.58968 -0.1114,2.23534 -0.0334,0.64568 -0.0949,1.95127 -0.13946,2.90914 -0.0446,0.95787 -0.10573,2.24889 -0.13903,2.87329 -0.0278,0.62438 -0.0782,1.66033 -0.1114,2.306 -0.0278,0.64567 -0.0784,1.66757 -0.10629,2.27068 -0.0333,0.60311 -0.0724,1.46835 -0.0948,1.91535 -0.0781,1.78094 0.20082,4.10128 0.60206,4.95269 0.74117,1.56098 1.80002,1.33385 4.38021,-0.95793 0.94181,-0.83725 2.34082,-2.28432 2.68077,-2.7668 0.42353,-0.61019 0.57933,-1.05723 0.55146,-1.57519 -0.0224,-0.35476 -0.0556,-0.46828 -0.27849,-0.85143 -0.47926,-0.80177 -0.70241,-1.91591 -0.75258,-3.73231 -0.0389,-1.51129 0.0615,-5.09435 0.25639,-9.15287 0.15047,-3.02257 0.17301,-3.54085 0.22875,-4.43485 0.27862,-4.58357 0.44547,-6.66956 0.61268,-7.55648 0.47367,-2.54722 1.63316,-4.79597 2.87592,-5.58356 0.47368,-0.298 0.5069,-0.30535 1.01959,-0.30535 0.50157,0 0.56299,0.0141 0.97537,0.26952 0.78575,0.47539 1.31536,1.04293 2.63612,2.81677 1.63286,2.19954 3.17636,4.62612 8.04144,12.6651 3.08178,5.08732 5.38883,8.86931 5.84582,9.57884 2.83657,4.40617 5.87365,7.97502 8.71579,10.25261 2.73069,2.18535 5.36672,3.24995 7.64603,3.09385 2.43531,-0.17029 5.78464,-1.46887 8.74937,-3.37749 2.89788,-1.87317 4.43047,-3.81723 4.5252,-5.74004 0.0278,-0.63149 -0.0724,-0.94386 -0.36778,-1.17092 -0.30096,-0.21995 -0.55719,-0.17022 -1.15904,0.22712 -0.95297,0.62439 -2.85352,1.57519 -3.14889,1.57519 -0.14485,0 -0.12799,-0.12071 0.12288,-0.83024 0.56284,-1.62482 0.74087,-3.6399 0.50681,-5.84652 -0.32324,-3.00841 -1.22026,-5.59829 -2.5243,-7.28697 -0.39569,-0.51794 -0.5463,-0.66683 -1.12588,-1.12801 -0.44024,-0.35476 -1.0924,-0.60297 -1.7054,-0.63846 -0.81365,-0.0568 -1.41534,0.14208 -2.15652,0.69549 -0.35666,0.26964 -1.20354,1.29123 -1.432,1.73114 -0.0782,0.15609 -0.21191,0.41121 -0.2955,0.5673 -0.25078,0.46829 -0.51282,1.15669 -0.76916,2.03648 -0.49042,1.6603 -0.7075,3.27111 -0.7075,5.20101 0,1.74545 0.0781,2.4337 0.43454,3.7747 0.16716,0.63858 0.17255,0.75884 0.0166,0.69498 -0.30095,-0.12771 -1.61044,-1.19907 -2.51877,-2.07888 -1.20935,-1.15654 -2.01185,-2.05723 -3.79517,-4.23551 -5.34433,-6.52765 -9.65193,-12.89941 -15.02972,-22.24394 -0.59071,-1.03592 -1.76108,-3.04406 -2.59701,-4.46312 -0.83592,-1.41907 -1.5213,-2.63226 -1.5213,-2.70321 0,-0.19867 0.32855,-0.75908 0.65733,-1.12094 0.17278,-0.19159 1.28205,-1.31289 2.4635,-2.49781 2.20125,-2.21372 6.16315,-6.23629 7.55079,-7.66244 2.29602,-2.36984 2.72536,-2.81714 4.70931,-4.92444 0.84149,-0.89401 1.88349,-2.01487 2.30703,-2.48315 0.42912,-0.47539 0.88041,-0.97202 1.00299,-1.10683 1.08671,-1.18491 2.9035,-3.32805 4.16295,-4.9103 3.69481,-4.6403 5.84618,-8.25163 6.26972,-10.52212 0.0391,-0.23415 0.0782,-0.67405 0.0782,-0.97206 0,-1.44745 -0.39038,-2.0932 -1.32104,-2.17126 -0.49598,-0.0426 -0.89715,0.057 -1.78321,0.4189 -1.24274,0.51087 -2.36837,1.14934 -4.17953,2.34135 -1.63285,1.08557 -1.72768,1.21338 -1.81127,2.54019 -0.0782,1.29843 -0.41777,2.34109 -1.32614,4.1078 -1.49908,2.93037 -3.5666,5.74729 -7.18896,9.84128 -0.37896,0.42572 -0.81933,0.92944 -0.97536,1.10683 -0.8861,1.02171 -3.41064,3.71107 -5.0992,5.42813 -3.47744,3.54054 -6.69309,6.5561 -11.39655,10.70684 -1.94491,1.70996 -3.41043,3.07908 -4.23523,3.96598 -0.30092,0.31928 -0.52403,0.50385 -0.55189,0.46838 -0.0501,-0.064 -0.0276,-0.47543 0.13946,-3.15745 0.13375,-2.1144 0.3067,-5.49172 0.49619,-9.75598 0.15604,-3.42703 0.2171,-5.1015 0.44559,-12.3103 0.1393,-4.3778 0.0123,-8.84757 -0.33972,-11.63602 -0.38035,-3.0421 -1.0126,-4.47103 -2.01961,-4.52874 z m -21.49208,8.77332 c 0.018,0.0205 -0.26914,0.67645 -0.64585,1.47627 -1.34543,2.86092 -3.35476,7.97799 -4.9334,12.53087 -2.07196,5.98845 -4.01836,12.36674 -7.03211,23.04137 l -0.232993,0.84084 -1.076564,-0.9332 c -0.591985,-0.50245 -2.063021,-1.7331 -3.273893,-2.70724 -1.210872,-0.98441 -2.305146,-1.89679 -2.439689,-2.01984 l -0.241928,-0.22561 1.076134,-1.99965 c 3.264871,-6.03971 4.762823,-8.73686 7.121783,-12.81803 4.39507,-7.57787 7.73188,-12.59184 10.84431,-16.28336 0.4395,-0.52298 0.81625,-0.93318 0.8342,-0.90242 z m -53.353054,21.8422 c 1.45359,0.0142 3.128374,0.11165 4.137436,0.26547 5.785287,0.87162 12.12673,3.48647 19.042158,7.85476 0.852095,0.53322 1.228933,0.82057 1.193058,0.92311 -0.0269,0.0718 -0.681898,1.13808 -1.453271,2.36858 -4.161813,6.57295 -7.103891,10.81849 -9.364185,13.49485 l -0.852063,1.01497 -0.627568,-0.0717 c -4.38605,-0.46142 -8.287965,-1.22031 -11.310665,-2.19446 -5.946732,-1.9278 -10.368689,-4.85035 -12.664865,-8.36754 -0.484349,-0.74854 -1.201866,-2.41994 -1.41713,-3.33258 -0.233206,-0.95364 -0.233149,-3.49645 -0.0089,-4.34754 0.42156,-1.56889 1.282473,-2.99462 2.475403,-4.08155 2.125761,-1.93806 4.8976,-3.04557 8.664765,-3.45575 0.521348,-0.0577 1.313699,-0.0791 2.185854,-0.0707 z m 45.038174,27.43939 c 0.0269,0 0.36773,0.54342 0.75342,1.19969 1.2378,2.12262 2.01807,4.33779 2.35892,6.64497 0.21526,1.52788 0.21531,4.57339 -0.009,6.14228 -0.13455,0.97415 -0.60098,3.0044 -0.74449,3.271 -0.0628,0.11281 -0.48418,-0.349 -0.9775,-1.07704 -0.87901,-1.30229 -1.53395,-3.11731 -1.83892,-5.10662 -0.2332,-1.52788 -0.32294,-4.51153 -0.17943,-6.35729 0.11661,-1.51762 0.54724,-4.71699 0.63693,-4.71699 z"
                />
                <ellipse
                    // className={classes.circle}
                    style={{
                        opacity: "1",
                        fillOpacity: "0",
                        stroke: "url(#linear)",
                        strokeWidth: "6.769",
                        strokeMiterlimit: "4",
                        strokeOpacity: "1"
                    }}
                    id="path7941"
                    cx="105.28413"
                    cy="155.53384"
                    rx="95.288521"
                    ry="94.406204" />
            </g>
        </svg >)

}