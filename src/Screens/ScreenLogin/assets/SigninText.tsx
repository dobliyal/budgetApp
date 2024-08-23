import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SigninText: React.FC<SvgProps> = (props) => (
  <Svg
    width={250}
    height={31}
    viewBox="0 0 325 31"
    fill="none"

    {...props}
  >
<Path d="M-55.596 2.4049C-53.6276 2.4049 -51.8946 2.71513 -50.3969 3.3356C-48.8779 3.93467 -47.562 4.82257 -46.4495 5.99932L-49.1132 9.56164C-50.0332 8.59885 -51.0281 7.88211 -52.0979 7.41141C-53.1462 6.91932 -54.3444 6.67327 -55.6923 6.67327C-56.4839 6.67327 -57.1258 6.75885 -57.6179 6.93001C-58.11 7.10118 -58.463 7.33653 -58.6769 7.63606C-58.8909 7.9356 -58.9979 8.27792 -58.9979 8.66304C-58.9979 9.11234 -58.7946 9.49746 -58.3881 9.81839C-57.9602 10.1179 -57.2755 10.3747 -56.3341 10.5886L-52.7718 11.3909C-50.6537 11.883 -49.1025 12.5998 -48.1183 13.5412C-47.1341 14.4826 -46.642 15.7342 -46.642 17.2961C-46.642 18.7937 -47.0272 20.0668 -47.7974 21.1151C-48.5676 22.1421 -49.6267 22.923 -50.9746 23.4579C-52.3225 23.9714 -53.863 24.2282 -55.596 24.2282C-57.0081 24.2282 -58.356 24.0784 -59.6397 23.7789C-60.9234 23.4579 -62.0788 23.0086 -63.1058 22.4309C-64.1327 21.8533 -64.9993 21.19 -65.7053 20.4412L-63.0416 16.7505C-62.5067 17.3709 -61.8541 17.9272 -61.0839 18.4193C-60.2923 18.89 -59.4365 19.2644 -58.5165 19.5426C-57.5751 19.8207 -56.623 19.9598 -55.6602 19.9598C-54.9114 19.9598 -54.2909 19.8849 -53.7988 19.7351C-53.2853 19.5854 -52.9109 19.3607 -52.6755 19.0612C-52.4402 18.7616 -52.3225 18.4086 -52.3225 18.0021C-52.3225 17.5528 -52.483 17.1784 -52.8039 16.8789C-53.1248 16.5579 -53.7346 16.2905 -54.6332 16.0765L-58.5486 15.21C-59.7467 14.9319 -60.8165 14.5682 -61.7579 14.1189C-62.6779 13.6482 -63.4053 13.0277 -63.9402 12.2575C-64.4751 11.4658 -64.7425 10.4816 -64.7425 9.3049C-64.7425 7.97839 -64.3788 6.80164 -63.6514 5.77467C-62.9239 4.72629 -61.8755 3.90257 -60.5062 3.3035C-59.1369 2.70443 -57.5002 2.4049 -55.596 2.4049ZM-39.9481 5.99932C-41.0607 5.99932 -41.8737 5.79606 -42.3872 5.38955C-42.8793 4.96164 -43.1254 4.29839 -43.1254 3.39978C-43.1254 2.47978 -42.8793 1.81653 -42.3872 1.41001C-41.8737 0.982108 -41.0607 0.768155 -39.9481 0.768155C-38.857 0.768155 -38.0547 0.982108 -37.5412 1.41001C-37.0277 1.81653 -36.7709 2.47978 -36.7709 3.39978C-36.7709 4.29839 -37.0277 4.96164 -37.5412 5.38955C-38.0547 5.79606 -38.857 5.99932 -39.9481 5.99932ZM-37.2202 7.86071V23.9072H-42.6761V7.86071H-37.2202ZM-16.8407 3.56025L-16.3914 7.21885C-16.5197 7.17606 -16.6481 7.15467 -16.7765 7.15467C-16.9049 7.13327 -17.0332 7.12257 -17.1616 7.12257C-18.103 7.12257 -18.809 7.35792 -19.2797 7.82862C-19.729 8.27792 -19.9537 8.8449 -19.9537 9.52955L-21.8793 8.8235C-21.8793 7.94629 -21.7188 7.10118 -21.3979 6.28815C-21.0769 5.47513 -20.5849 4.81188 -19.9216 4.29839C-19.2369 3.7849 -18.3811 3.52815 -17.3542 3.52815C-17.29 3.52815 -17.2151 3.52815 -17.1295 3.52815C-17.0225 3.52815 -16.9262 3.53885 -16.8407 3.56025ZM-22.3607 20.3449C-20.4993 20.3449 -19.0765 20.7407 -18.0923 21.5323C-17.0867 22.3026 -16.5839 23.4151 -16.5839 24.87C-16.5839 26.1965 -16.9476 27.2984 -17.6751 28.1756C-18.4025 29.0528 -19.4295 29.7054 -20.756 30.1333C-22.0611 30.5826 -23.6123 30.8072 -25.4095 30.8072C-28.3193 30.8072 -30.416 30.4435 -31.6997 29.7161C-32.9835 28.9886 -33.6253 28.0044 -33.6253 26.7635C-33.6253 25.8649 -33.2616 25.1375 -32.5342 24.5812C-31.8067 24.0249 -30.5979 23.7254 -28.9076 23.6826L-29.036 24.1961C-30.3411 24.0249 -31.3146 23.6398 -31.9565 23.0407C-32.5983 22.4416 -32.9193 21.6286 -32.9193 20.6016C-32.9193 19.5747 -32.5128 18.7402 -31.6997 18.0984C-30.8867 17.4565 -29.8063 17.1035 -28.4583 17.0393L-26.4686 17.97H-26.9821C-27.8165 18.0128 -28.4049 18.1519 -28.7472 18.3872C-29.0895 18.6226 -29.2607 18.9114 -29.2607 19.2537C-29.2607 19.6175 -29.1109 19.8956 -28.8114 20.0882C-28.5118 20.2593 -28.0625 20.3449 -27.4635 20.3449H-22.3607ZM-25.3774 27.277C-24.3504 27.277 -23.5053 27.2021 -22.8421 27.0523C-22.1574 26.924 -21.6439 26.7314 -21.3016 26.4747C-20.9593 26.2393 -20.7881 25.9612 -20.7881 25.6402C-20.7881 25.3193 -20.9058 25.0626 -21.1411 24.87C-21.3765 24.6989 -21.8044 24.6133 -22.4249 24.6133H-28.1695C-28.576 24.6133 -28.9076 24.7202 -29.1644 24.9342C-29.3997 25.1482 -29.5174 25.4156 -29.5174 25.7365C-29.5174 26.2286 -29.1537 26.603 -28.4263 26.8598C-27.6988 27.1379 -26.6825 27.277 -25.3774 27.277ZM-25.1849 7.53978C-23.5588 7.53978 -22.1681 7.75374 -21.0128 8.18164C-19.8574 8.60955 -18.9802 9.23002 -18.3811 10.043C-17.7607 10.8347 -17.4504 11.8189 -17.4504 12.9956C-17.4504 14.1509 -17.7607 15.1351 -18.3811 15.9482C-18.9802 16.7612 -19.8574 17.3816 -21.0128 17.8096C-22.1681 18.2161 -23.5588 18.4193 -25.1849 18.4193C-27.7309 18.4193 -29.6672 17.9486 -30.9937 17.0072C-32.2988 16.0658 -32.9514 14.7286 -32.9514 12.9956C-32.9514 11.8189 -32.6518 10.8347 -32.0528 10.043C-31.4323 9.23002 -30.5444 8.60955 -29.389 8.18164C-28.2337 7.75374 -26.8323 7.53978 -25.1849 7.53978ZM-25.1849 10.6528C-25.8909 10.6528 -26.4686 10.8561 -26.9179 11.2626C-27.3458 11.6691 -27.5597 12.2468 -27.5597 12.9956C-27.5597 13.723 -27.3458 14.29 -26.9179 14.6965C-26.4686 15.103 -25.8909 15.3063 -25.1849 15.3063C-24.5002 15.3063 -23.9332 15.103 -23.4839 14.6965C-23.0346 14.29 -22.81 13.723 -22.81 12.9956C-22.81 12.2468 -23.0346 11.6691 -23.4839 11.2626C-23.9332 10.8561 -24.5002 10.6528 -25.1849 10.6528ZM-13.4526 23.9072V7.86071H-8.57446L-8.28562 13.3807L-8.89539 12.7709C-8.68143 11.6156 -8.30701 10.6528 -7.77213 9.88257C-7.21585 9.11234 -6.5312 8.53467 -5.71818 8.14955C-4.88376 7.74304 -3.95306 7.53978 -2.92608 7.53978C-1.81353 7.53978 -0.850734 7.75374 -0.0377106 8.18164C0.796708 8.60955 1.44927 9.24071 1.91996 10.0751C2.39066 10.9096 2.62601 11.9579 2.62601 13.2202V23.9072H-2.8298V14.6644C-2.8298 13.5519 -3.04376 12.7816 -3.47167 12.3537C-3.89957 11.9258 -4.44515 11.7119 -5.10841 11.7119C-5.6219 11.7119 -6.10329 11.8402 -6.55259 12.097C-7.0019 12.3323 -7.35492 12.7175 -7.61167 13.2523C-7.86841 13.7872 -7.99678 14.504 -7.99678 15.4026V23.9072H-13.4526ZM20.2852 5.99932C19.1726 5.99932 18.3596 5.79606 17.8461 5.38955C17.354 4.96164 17.108 4.29839 17.108 3.39978C17.108 2.47978 17.354 1.81653 17.8461 1.41001C18.3596 0.982108 19.1726 0.768155 20.2852 0.768155C21.3764 0.768155 22.1787 0.982108 22.6922 1.41001C23.2057 1.81653 23.4624 2.47978 23.4624 3.39978C23.4624 4.29839 23.2057 4.96164 22.6922 5.38955C22.1787 5.79606 21.3764 5.99932 20.2852 5.99932ZM23.0131 7.86071V23.9072H17.5573V7.86071H23.0131ZM27.8597 23.9072V7.86071H32.7378L33.0266 13.3807L32.4169 12.7709C32.6308 11.6156 33.0052 10.6528 33.5401 9.88257C34.0964 9.11234 34.781 8.53467 35.5941 8.14955C36.4285 7.74304 37.3592 7.53978 38.3862 7.53978C39.4987 7.53978 40.4615 7.75374 41.2745 8.18164C42.109 8.60955 42.7615 9.24071 43.2322 10.0751C43.7029 10.9096 43.9383 11.9579 43.9383 13.2202V23.9072H38.4824V14.6644C38.4824 13.5519 38.2685 12.7816 37.8406 12.3537C37.4127 11.9258 36.8671 11.7119 36.2038 11.7119C35.6904 11.7119 35.209 11.8402 34.7597 12.097C34.3104 12.3323 33.9573 12.7175 33.7006 13.2523C33.4438 13.7872 33.3155 14.504 33.3155 15.4026V23.9072H27.8597ZM65.3262 2.75792V18.1947C65.3262 18.9649 65.5081 19.5212 65.8718 19.8635C66.2569 20.1844 66.7811 20.3449 67.4444 20.3449C67.9579 20.3449 68.3965 20.2914 68.7602 20.1844C69.1453 20.0561 69.4876 19.8742 69.7872 19.6389L70.3649 23.0086C69.83 23.3937 69.156 23.6933 68.343 23.9072C67.53 24.1212 66.6956 24.2282 65.8397 24.2282C64.6202 24.2282 63.5611 24.057 62.6625 23.7147C61.7853 23.3723 61.1007 22.8268 60.6086 22.0779C60.1379 21.3291 59.8918 20.3342 59.8704 19.0933V4.26629L65.3262 2.75792ZM70.1081 7.86071V11.744H57.1104V7.86071H70.1081ZM81.2291 7.53978C82.9193 7.53978 84.3956 7.87141 85.6579 8.53467C86.9417 9.17653 87.9365 10.1286 88.6426 11.3909C89.37 12.6319 89.7338 14.1296 89.7338 15.884C89.7338 17.6384 89.37 19.1468 88.6426 20.4091C87.9365 21.65 86.9417 22.6021 85.6579 23.2654C84.3956 23.9072 82.9193 24.2282 81.2291 24.2282C79.5817 24.2282 78.1161 23.9072 76.8324 23.2654C75.5486 22.6021 74.5431 21.65 73.8156 20.4091C73.1096 19.1468 72.7565 17.6384 72.7565 15.884C72.7565 14.1296 73.1096 12.6319 73.8156 11.3909C74.5431 10.1286 75.5486 9.17653 76.8324 8.53467C78.1161 7.87141 79.5817 7.53978 81.2291 7.53978ZM81.2291 11.423C80.6086 11.423 80.0738 11.5728 79.6244 11.8723C79.1751 12.1719 78.8328 12.6533 78.5975 13.3165C78.3621 13.9798 78.2444 14.8356 78.2444 15.884C78.2444 16.9323 78.3621 17.7882 78.5975 18.4514C78.8328 19.0933 79.1751 19.5747 79.6244 19.8956C80.0738 20.1951 80.6086 20.3449 81.2291 20.3449C81.871 20.3449 82.4165 20.1951 82.8658 19.8956C83.3151 19.5747 83.6575 19.0933 83.8928 18.4514C84.1282 17.7882 84.2458 16.9323 84.2458 15.884C84.2458 14.8356 84.1282 13.9798 83.8928 13.3165C83.6575 12.6533 83.3151 12.1719 82.8658 11.8723C82.4165 11.5728 81.871 11.423 81.2291 11.423ZM104.296 23.9072V2.72583H114.598C117.209 2.74722 119.134 3.25001 120.375 4.2342C121.616 5.19699 122.236 6.59839 122.236 8.43839C122.236 9.63653 121.883 10.6742 121.177 11.5514C120.471 12.4072 119.391 12.9528 117.936 13.1882V13.2202C119.562 13.4342 120.771 14.0012 121.563 14.9212C122.376 15.8198 122.782 16.9109 122.782 18.1947C122.782 20.0133 122.14 21.4254 120.856 22.4309C119.573 23.4151 117.647 23.9072 115.08 23.9072H104.296ZM109.624 20.024H114.149C115.155 20.024 115.903 19.8207 116.396 19.4142C116.888 19.0077 117.134 18.4193 117.134 17.6491C117.134 16.9002 116.888 16.3333 116.396 15.9482C115.903 15.5416 115.155 15.3384 114.149 15.3384H109.624V20.024ZM109.624 11.3909H113.636C115.604 11.3909 116.588 10.6207 116.588 9.08025C116.588 7.53978 115.604 6.76955 113.636 6.76955H109.624V11.3909ZM132.236 24.2282C131.145 24.2282 130.182 24.0463 129.348 23.6826C128.535 23.2975 127.893 22.6877 127.422 21.8533C126.952 21.0189 126.716 19.9277 126.716 18.5798V7.86071H132.172V17.2961C132.172 18.323 132.376 19.0398 132.782 19.4463C133.189 19.8528 133.766 20.0561 134.515 20.0561C134.9 20.0561 135.264 19.9919 135.606 19.8635C135.949 19.7137 136.248 19.4998 136.505 19.2216C136.762 18.9221 136.954 18.5477 137.082 18.0984C137.232 17.6277 137.307 17.0821 137.307 16.4616V7.86071H142.763V23.9072H137.885L137.724 20.8905C137.211 22.0244 136.494 22.8696 135.574 23.4258C134.654 23.9607 133.542 24.2282 132.236 24.2282ZM153.551 24.2282C152.224 24.2282 151.058 23.9072 150.053 23.2654C149.068 22.6021 148.298 21.65 147.742 20.4091C147.207 19.1682 146.94 17.6812 146.94 15.9482C146.94 14.1509 147.218 12.6319 147.774 11.3909C148.352 10.15 149.143 9.19792 150.149 8.53467C151.176 7.87141 152.353 7.53978 153.679 7.53978C155.134 7.53978 156.3 7.98908 157.177 8.88769C158.076 9.7649 158.654 10.8882 158.91 12.2575L158.397 12.9314V1.05699H163.853V23.9072H158.974L158.621 18.4514L159.263 18.9328C159.135 20.0026 158.803 20.9333 158.268 21.7249C157.755 22.5165 157.092 23.137 156.279 23.5863C155.487 24.0142 154.578 24.2282 153.551 24.2282ZM155.444 20.2165C156.065 20.2165 156.589 20.0561 157.017 19.7351C157.466 19.3928 157.808 18.89 158.044 18.2268C158.279 17.5635 158.397 16.7505 158.397 15.7877C158.397 14.8891 158.279 14.1296 158.044 13.5091C157.83 12.8672 157.498 12.3858 157.049 12.0649C156.621 11.7226 156.097 11.5514 155.476 11.5514C154.535 11.5514 153.786 11.9044 153.23 12.6105C152.695 13.2951 152.427 14.3863 152.427 15.884C152.427 17.3816 152.695 18.4835 153.23 19.1896C153.765 19.8742 154.503 20.2165 155.444 20.2165ZM184.262 3.56025L184.712 7.21885C184.583 7.17606 184.455 7.15467 184.326 7.15467C184.198 7.13327 184.07 7.12257 183.941 7.12257C183 7.12257 182.294 7.35792 181.823 7.82862C181.374 8.27792 181.149 8.8449 181.149 9.52955L179.224 8.8235C179.224 7.94629 179.384 7.10118 179.705 6.28815C180.026 5.47513 180.518 4.81188 181.181 4.29839C181.866 3.7849 182.722 3.52815 183.749 3.52815C183.813 3.52815 183.888 3.52815 183.973 3.52815C184.08 3.52815 184.177 3.53885 184.262 3.56025ZM178.742 20.3449C180.604 20.3449 182.026 20.7407 183.011 21.5323C184.016 22.3026 184.519 23.4151 184.519 24.87C184.519 26.1965 184.155 27.2984 183.428 28.1756C182.7 29.0528 181.673 29.7054 180.347 30.1333C179.042 30.5826 177.491 30.8072 175.693 30.8072C172.784 30.8072 170.687 30.4435 169.403 29.7161C168.119 28.9886 167.478 28.0044 167.478 26.7635C167.478 25.8649 167.841 25.1375 168.569 24.5812C169.296 24.0249 170.505 23.7254 172.195 23.6826L172.067 24.1961C170.762 24.0249 169.788 23.6398 169.146 23.0407C168.505 22.4416 168.184 21.6286 168.184 20.6016C168.184 19.5747 168.59 18.7402 169.403 18.0984C170.216 17.4565 171.297 17.1035 172.645 17.0393L174.634 17.97H174.121C173.286 18.0128 172.698 18.1519 172.356 18.3872C172.013 18.6226 171.842 18.9114 171.842 19.2537C171.842 19.6175 171.992 19.8956 172.292 20.0882C172.591 20.2593 173.04 20.3449 173.639 20.3449H178.742ZM175.725 27.277C176.752 27.277 177.598 27.2021 178.261 27.0523C178.946 26.924 179.459 26.7314 179.801 26.4747C180.144 26.2393 180.315 25.9612 180.315 25.6402C180.315 25.3193 180.197 25.0626 179.962 24.87C179.726 24.6989 179.299 24.6133 178.678 24.6133H172.933C172.527 24.6133 172.195 24.7202 171.939 24.9342C171.703 25.1482 171.585 25.4156 171.585 25.7365C171.585 26.2286 171.949 26.603 172.677 26.8598C173.404 27.1379 174.42 27.277 175.725 27.277ZM175.918 7.53978C177.544 7.53978 178.935 7.75374 180.09 8.18164C181.246 8.60955 182.123 9.23002 182.722 10.043C183.342 10.8347 183.652 11.8189 183.652 12.9956C183.652 14.1509 183.342 15.1351 182.722 15.9482C182.123 16.7612 181.246 17.3816 180.09 17.8096C178.935 18.2161 177.544 18.4193 175.918 18.4193C173.372 18.4193 171.436 17.9486 170.109 17.0072C168.804 16.0658 168.152 14.7286 168.152 12.9956C168.152 11.8189 168.451 10.8347 169.05 10.043C169.671 9.23002 170.559 8.60955 171.714 8.18164C172.869 7.75374 174.271 7.53978 175.918 7.53978ZM175.918 10.6528C175.212 10.6528 174.634 10.8561 174.185 11.2626C173.757 11.6691 173.543 12.2468 173.543 12.9956C173.543 13.723 173.757 14.29 174.185 14.6965C174.634 15.103 175.212 15.3063 175.918 15.3063C176.603 15.3063 177.17 15.103 177.619 14.6965C178.068 14.29 178.293 13.723 178.293 12.9956C178.293 12.2468 178.068 11.6691 177.619 11.2626C177.17 10.8561 176.603 10.6528 175.918 10.6528ZM195.481 24.2282C193.705 24.2282 192.165 23.8965 190.86 23.2333C189.576 22.57 188.581 21.6179 187.875 20.377C187.169 19.1361 186.816 17.6384 186.816 15.884C186.816 14.1296 187.169 12.6319 187.875 11.3909C188.581 10.15 189.565 9.19792 190.828 8.53467C192.111 7.87141 193.577 7.53978 195.224 7.53978C196.915 7.53978 198.348 7.87141 199.525 8.53467C200.723 9.17653 201.632 10.0751 202.253 11.2305C202.873 12.3644 203.183 13.6696 203.183 15.1458C203.183 15.5309 203.173 15.9161 203.151 16.3012C203.13 16.6863 203.098 17.0072 203.055 17.264H190.346V14.3435H200.648L198.048 15.3384C198.048 14.0547 197.813 13.0705 197.342 12.3858C196.893 11.7012 196.187 11.3589 195.224 11.3589C194.54 11.3589 193.951 11.5193 193.459 11.8402C192.988 12.1612 192.625 12.664 192.368 13.3486C192.133 14.0333 192.015 14.9105 192.015 15.9802C192.015 17.0286 192.154 17.8844 192.432 18.5477C192.71 19.1896 193.106 19.6602 193.62 19.9598C194.133 20.2379 194.754 20.377 195.481 20.377C196.294 20.377 196.936 20.2165 197.407 19.8956C197.899 19.5747 198.262 19.1254 198.498 18.5477L202.862 19.9919C202.563 20.9119 202.039 21.6928 201.29 22.3347C200.562 22.9551 199.685 23.4258 198.658 23.7468C197.653 24.0677 196.594 24.2282 195.481 24.2282ZM213.718 2.75792V18.1947C213.718 18.9649 213.899 19.5212 214.263 19.8635C214.648 20.1844 215.172 20.3449 215.836 20.3449C216.349 20.3449 216.788 20.2914 217.152 20.1844C217.537 20.0561 217.879 19.8742 218.179 19.6389L218.756 23.0086C218.221 23.3937 217.547 23.6933 216.734 23.9072C215.921 24.1212 215.087 24.2282 214.231 24.2282C213.012 24.2282 211.952 24.057 211.054 23.7147C210.177 23.3723 209.492 22.8268 209 22.0779C208.529 21.3291 208.283 20.3342 208.262 19.0933V4.26629L213.718 2.75792ZM218.499 7.86071V11.744H205.502V7.86071H218.499ZM222.367 23.9072V2.72583H232.669C235.28 2.74722 237.205 3.25001 238.446 4.2342C239.687 5.19699 240.307 6.59839 240.307 8.43839C240.307 9.63653 239.954 10.6742 239.248 11.5514C238.542 12.4072 237.462 12.9528 236.007 13.1882V13.2202C237.633 13.4342 238.842 14.0012 239.633 14.9212C240.447 15.8198 240.853 16.9109 240.853 18.1947C240.853 20.0133 240.211 21.4254 238.927 22.4309C237.644 23.4151 235.718 23.9072 233.151 23.9072H222.367ZM227.695 20.024H232.22C233.226 20.024 233.974 19.8207 234.467 19.4142C234.959 19.0077 235.205 18.4193 235.205 17.6491C235.205 16.9002 234.959 16.3333 234.467 15.9482C233.974 15.5416 233.226 15.3384 232.22 15.3384H227.695V20.024ZM227.695 11.3909H231.707C233.675 11.3909 234.659 10.6207 234.659 9.08025C234.659 7.53978 233.675 6.76955 231.707 6.76955H227.695V11.3909ZM250.307 24.2282C249.216 24.2282 248.253 24.0463 247.419 23.6826C246.606 23.2975 245.964 22.6877 245.493 21.8533C245.023 21.0189 244.787 19.9277 244.787 18.5798V7.86071H250.243V17.2961C250.243 18.323 250.446 19.0398 250.853 19.4463C251.26 19.8528 251.837 20.0561 252.586 20.0561C252.971 20.0561 253.335 19.9919 253.677 19.8635C254.02 19.7137 254.319 19.4998 254.576 19.2216C254.833 18.9221 255.025 18.5477 255.153 18.0984C255.303 17.6277 255.378 17.0821 255.378 16.4616V7.86071H260.834V23.9072H255.956L255.795 20.8905C255.282 22.0244 254.565 22.8696 253.645 23.4258C252.725 23.9607 251.613 24.2282 250.307 24.2282ZM271.622 24.2282C270.295 24.2282 269.129 23.9072 268.124 23.2654C267.139 22.6021 266.369 21.65 265.813 20.4091C265.278 19.1682 265.011 17.6812 265.011 15.9482C265.011 14.1509 265.289 12.6319 265.845 11.3909C266.423 10.15 267.214 9.19792 268.22 8.53467C269.247 7.87141 270.424 7.53978 271.75 7.53978C273.205 7.53978 274.371 7.98908 275.248 8.88769C276.147 9.7649 276.724 10.8882 276.981 12.2575L276.468 12.9314V1.05699H281.924V23.9072H277.045L276.692 18.4514L277.334 18.9328C277.206 20.0026 276.874 20.9333 276.339 21.7249C275.826 22.5165 275.163 23.137 274.35 23.5863C273.558 24.0142 272.649 24.2282 271.622 24.2282ZM273.515 20.2165C274.136 20.2165 274.66 20.0561 275.088 19.7351C275.537 19.3928 275.879 18.89 276.115 18.2268C276.35 17.5635 276.468 16.7505 276.468 15.7877C276.468 14.8891 276.35 14.1296 276.115 13.5091C275.901 12.8672 275.569 12.3858 275.12 12.0649C274.692 11.7226 274.168 11.5514 273.547 11.5514C272.606 11.5514 271.857 11.9044 271.301 12.6105C270.766 13.2951 270.498 14.3863 270.498 15.884C270.498 17.3816 270.766 18.4835 271.301 19.1896C271.836 19.8742 272.574 20.2165 273.515 20.2165ZM292.705 24.2282C291.379 24.2282 290.213 23.9072 289.207 23.2654C288.223 22.6021 287.453 21.65 286.896 20.4091C286.362 19.1682 286.094 17.6812 286.094 15.9482C286.094 14.1509 286.372 12.6319 286.929 11.3909C287.506 10.15 288.298 9.19792 289.303 8.53467C290.33 7.87141 291.507 7.53978 292.834 7.53978C294.289 7.53978 295.455 7.98908 296.332 8.88769C297.23 9.7649 297.808 10.8882 298.065 12.2575L297.551 12.9314V1.05699H303.007V23.9072H298.129L297.776 18.4514L298.418 18.9328C298.29 20.0026 297.958 20.9333 297.423 21.7249C296.91 22.5165 296.246 23.137 295.433 23.5863C294.642 24.0142 293.732 24.2282 292.705 24.2282ZM294.599 20.2165C295.219 20.2165 295.743 20.0561 296.171 19.7351C296.621 19.3928 296.963 18.89 297.198 18.2268C297.434 17.5635 297.551 16.7505 297.551 15.7877C297.551 14.8891 297.434 14.1296 297.198 13.5091C296.984 12.8672 296.653 12.3858 296.203 12.0649C295.776 11.7226 295.251 11.5514 294.631 11.5514C293.69 11.5514 292.941 11.9044 292.384 12.6105C291.85 13.2951 291.582 14.3863 291.582 15.884C291.582 17.3816 291.85 18.4835 292.384 19.1896C292.919 19.8742 293.657 20.2165 294.599 20.2165ZM324.027 7.86071L318.186 23.9072C317.587 25.5975 316.934 26.9454 316.228 27.9509C315.522 28.9565 314.688 29.684 313.725 30.1333C312.762 30.5826 311.607 30.8072 310.259 30.8072C309.36 30.8072 308.536 30.7109 307.788 30.5184C307.039 30.3258 306.386 30.0584 305.83 29.7161L306.921 26.0254C307.306 26.3035 307.713 26.4961 308.141 26.603C308.568 26.7314 309.114 26.7956 309.777 26.7956C310.398 26.7956 310.901 26.6886 311.286 26.4747C311.692 26.2607 312.013 25.8542 312.248 25.2551L312.666 24.2602L310.804 19.8956L305.99 7.86071H311.992L314.463 17.0072L315.233 20.4091L316.132 16.8789L318.603 7.86071H324.027Z" fill="black"/>
</Svg>
);

export default SigninText;