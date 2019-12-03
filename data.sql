PGDMP                          w         	   BookStore    12.0    12.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24601 	   BookStore    DATABASE     �   CREATE DATABASE "BookStore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "BookStore";
                postgres    false            �            1259    65560    Admin    TABLE     �   CREATE TABLE public."Admin" (
    adname text,
    password text,
    email text,
    address text,
    phone text,
    name text
);
    DROP TABLE public."Admin";
       public         heap    postgres    false            �            1259    32805    Books    TABLE     �   CREATE TABLE public."Books" (
    "BookID" text,
    "BookName" text,
    "Price" text,
    "Description" text,
    "Author" text,
    "Publisher" text,
    "Type" text,
    bookimg text,
    "BookLanguage" text
);
    DROP TABLE public."Books";
       public         heap    postgres    false            �            1259    32786    FavoriteBooks    TABLE     �   CREATE TABLE public."FavoriteBooks" (
    "BookID" text,
    "BookName" text,
    "Price" text,
    "Description" text,
    "Author" text,
    "Publisher" text,
    "Type" text,
    bookimg text
);
 #   DROP TABLE public."FavoriteBooks";
       public         heap    postgres    false            �            1259    24602    RecommendBooks    TABLE     �   CREATE TABLE public."RecommendBooks" (
    "Type" text,
    "Price" text,
    "Description" text,
    "BookName" text,
    "BookID" text,
    "Author" text,
    "Publisher" text,
    bookimg text
);
 $   DROP TABLE public."RecommendBooks";
       public         heap    postgres    false            �            1259    57362    Users    TABLE     �   CREATE TABLE public."Users" (
    account text,
    password text,
    name text,
    email text,
    address text,
    phone text
);
    DROP TABLE public."Users";
       public         heap    postgres    false                      0    65560    Admin 
   TABLE DATA           P   COPY public."Admin" (adname, password, email, address, phone, name) FROM stdin;
    public          postgres    false    206   �                 0    32805    Books 
   TABLE DATA           �   COPY public."Books" ("BookID", "BookName", "Price", "Description", "Author", "Publisher", "Type", bookimg, "BookLanguage") FROM stdin;
    public          postgres    false    204   �                 0    32786    FavoriteBooks 
   TABLE DATA              COPY public."FavoriteBooks" ("BookID", "BookName", "Price", "Description", "Author", "Publisher", "Type", bookimg) FROM stdin;
    public          postgres    false    203                      0    24602    RecommendBooks 
   TABLE DATA           �   COPY public."RecommendBooks" ("Type", "Price", "Description", "BookName", "BookID", "Author", "Publisher", bookimg) FROM stdin;
    public          postgres    false    202   �'                 0    57362    Users 
   TABLE DATA           Q   COPY public."Users" (account, password, name, email, address, phone) FROM stdin;
    public          postgres    false    205   N-          �  x�}�˒�@���.\#��e����E��ʦQ�FT.^�y�,��Ŭ���y��I&cH9�T����S����n0ʉ.��]�� ���q��J��g�+,���#�C��7%fj�����pW5�?���Z���󤣼<�|�c�� �X����n��΢���[N��`��=�^B}:�{�p�\Y�^EQ*SZ˯<:Sh��Rql]ٽ>f^�.¯+s��A��Ǖ�왡�� ��~]lG�Lq��f#�2���!����.;'NZ���#��n���(h��ΰ�Ӷ̸�WY�ʠ\qh�T:W�ֶ�|^F�R����i�����,���@�ao3YEe���W�8s�v�&G���wJ$�r��jzrBs�Z<*&s���b�@3�7k����E��	q-dS��*l��۫��;���4�|<�&����QЬ�ѹ8����|�H��	̊         O  x��YMoו]�Ń׭���M �3�#�#��1d��Ua}���(2+	B`d4BLA 8FHq��	ٖ���(�V��_2���^u7�	fCvW���yV�r��`���������tlξh���(mͪ-�F�6��`�zx�gW�wW'���I&���T���Mdv�o�v���]���En��[�lr�t�����Do��qj��4g��ˎ����Kl���Ʀf��G)6�>�Lџ���Fo����g�5Ny��������O+���4;��)�<;�d�yD�pLt� 7��9�:������+�`[9p�}.=)L�|_�����k�T&�sS�=L�.Vr��+�l|�edr�ܳ�ޛ��������Ys�%�����B�Y����*���'w��O��Dv�DU*4��}�l�ݯMI잿���՞߱�<���=���b��j,��$JB��ugtv��qZ�y�'��A��U#
�ׅQs%��Ѕ2��7����44�@ґ�M%N�`�iXX�8$i������Q��>�1�]l$8��k�7f]�K�r����������.�j�%��vmY$i\���OҸ*l��wV�Wq�=����77�<X^
���.���a�#���Ήwl��f��3�]$o��9�<�������?A5�X(&�I�00lϛ�Z����a�%g(�~=�\�®�0�����6'N�dx�<Aj�@�oK����YavՄ]��>�~)}����C��4C�#m&�Օ��;f$��l���Cne�EfeiIOC��bF��}.�����d�WN�HYO�5E"�S���̒��	�]���=�I��M���l碋��G��Zb�a�㎾�p�y-�\�c�!� תD�QGVb>o�9������,�=��=�6�[�P�X>~��T�X�$晏#��M-V���(f#LB��ٰy��7Iy~Eb�=^�ׂ�/��m�nA�`��pi�z��Jp�⩾p�w&�ЧRϜwa�=� ĺt���Zg�D���XeN3BO�(ӑ��͌�MZ���p±��1�
�$�������?�'�����_P_��{_y��[�k�+�N°��_%F�'���!=񳂨��'
w�
�Ml��Ь�1�x-���$�Q[%};,C�W�W��F��p���@3]�fd���D+�֏��e��d|"h�w��1��H�ᬆ?�����Kr��k��=�Wx"VK�;8I�ix؎��S^�~N�;�̮'���1L��"*�&>�Yl�찈�i��
l!���֭;���������QTvaf�<�	���oo��=��/D؛"Np���=Ԃ��D��楝[׆?�b���9��.��+�Iz^��`Ubj�uC�:�x=}�5���(��ݣ$E�����q�	Υ靣t�8D���}�}$�
B�t�� L�4r�sj	8�c�7 �����Z�E�V��QO6�a*�F@~��fn��)b��o��k����oϏľ���"� 	�|R&�����[����VY�Ue��B#���Lݳ/<�[E�����굕�]z\B�Fw�BMKP��J�B�t�?[~0�i1Mg8���6/#E��_q�~&�l�b���mϜm�%R}pG�#9�����^f��y��L���H&gZ�N�����\|&"�,���`m��_�O�։�k^	�sH ����H�Ҏc��#������/���BU8�%��puj���W�?�ѥ��~��X4�`^�i&a���aaޜ`.�pJ�#ˎq(�I>D�p�	q8p�3��3��3��Os��˚x[*�� n}fv��Z�����b���J%��v����*h?8v��>��YX+�D����F��mf���_�5Z��i;���9��x�F}X{�������4$�:ӎ���Ҙ@�?���
/��"�g^�������i�^p�����J����(�vM��m�������2=�'�u�Oc��ykҮ����dr��i�2��T!߿�~��6���[3�H�hpͧ��- !��l�m��T�%H�t���~��c_<��U����y(.��D��9��{!�U7��E�Y�ii\�>0��^��"�B7�I��?_WVV�b�ɀٯ�O�˹��VqH���N���]B�=���tf.�VI'P��Y�:������Y��C6Q%wV@������Q�!�
��;P�R�Y_H*d�+�VK`n�0m{B�A�ܾ���I>~���� �5���7����ȦS�I%�w9� B0�'��3cZ����ٞ�/� �I�Ǵ������iHsB��G��z|�!�Z�I�N��:5l���:�s���������
ފ�Yi���e�;�P��ҕ_����������Dd+ͪ\��ZI'I�!΅�ԅ�8��q�A[�G�c3�Q�Ĭۡ.bT[C%���,S���ϴi��.J�e6�b�[��)��@�NڰFU&�Wt�"
i�[K3��$$Ӥ���x�n��ٿ��KRIG�w�~����rb�6c(w1ԕޠ3�ˇ���Amj����p��p1J��gK|gv��T�O����#bf8G�t��ǹ`���>vy爥Z�C~"�$)�{�;��*�����S%§&e��~t��(�liڮa0#N�@,�w�g9��	ĵC���v��Bʥ\ Hr��>b����L;/ɚk[ļ��tJo�խ��ZZ=Ʒ?�7�$��o1���M�)�$��b��8��KF	Hy�:z�I2Nt?ucp��!F�@� =����	�#[�q9�F]%>ɥ��E���O�?ܖ[]W�<*���d���uf�-'���nJٹx*�;�N^�)�YA:��y.O��Ϥ�w�a6p��+E�מPU-z|�B�Μ#�3�B��گf�m9n妣�M�:t��O	�F"�#{V���.����#�E]��ጽ#��
��e��^���h�̋ѕ�g[p�Tq<k�4�X��i����B}����C4��x��^7�θ�:�%/��ʻ#:]��£zs�u�v��e�n�5�a��0I8i�1����񑐺KĴ���Mba΁pzT�0^T�V��ឹSVU<4��ٌ�pEl��|��?dYUiY���Yo��ׯ�^C��a������:3�r7�Q�Xĕ(�)_rd�`��]E�g#��}`�k�m���"�k�^�G���An�̎Fi�������=0�Fq���y�U�{�{W�0��i<2�ƶ��1��*[T�9H��+����fz�o F\�Lw���,У}X�zY�1w�
���ǜ@e=c��f�>�ߐw�)����w+ӏ�x(�R�al{�p��+3⛥������4[��bn����5�o&��� ���Uy���L�/�<���Y����0N����Yj�	��U����G�H� ���Z�8�����(�����u$I5I�xi�;�Ӂ��@]�wor�6�������%m	���E)I>�T�(Rv����$o)s�r:��y�7��|;�O��uC���XW�[Imhe��]K��� �GXZF��E��\ssa~3� \��[t�����:�׮Y_�r�N�ۥ�d&/��E�y��uv�~�o��;;��ő����o��[g�jβ�K��t�<���eC�eSe�=�C�v���Ԋ�i
w���B�E~_H�.,����l:������!�~k��l]�k���'e 	ŗ��?VmW��G�����W�T������Ks�v��a�*�+�|q�}.�})t�q��jM��P�*�lߌrz=0��Fx#��H��#�k�}�$�4szG��'�ܓs}x����*k�!���9�<H�������M���-�j2#N����N�3��[i܍��]T���b��][m��R����w��?~�F�         �  x�}X]k�}n���ϓF�EY;/a��
v-BV,yؗV�0ݑ�f2��7��ŘXLb����k��dX<��C)��_�si��̨���׹���J���]>�ǿض���K�jV��X�5�;���,7��̚�^=G��⥥�h����˃z���U�5{��L7������΍m�þ�GG��٬Gk�2�ۚnP�O:&���~ј{c���6�I���������б'����dG���+S��>�`N���	>� �L)c&���������2�կ�]C}�F�LMq50i=~��½�YlV$>.��Gr��k�ނ٣͝ztav�aG_�㗲��Δ}��,7%cd\�L�0��i��s��r��^�n�����ܿ��޼d��G�w���Iה��t�N>#�<v�P��i�����G�����.��6wo
Ӈcp����mBH|�:n`�ZT�����{������Je�p�`<���~t>���i$G�����~!`�o�H`=,.`�����^�D]J:���@Rzy\������0�O�(TzG�$4���k�DMPWJM
�m&����ӄ���P���\[�������,6?}����k�:(�.b�Qi����=�ˍ�,�k��po؝�c�������xOp҇�|]ڎJ�v�w��,�V��A���g�e<�1� ��z;�C�J�6��"G="��d�T�>Za:��Β�o�)%�Ԫ�>ٻ>�~��n�̵�>H�]�μ�bA��訩'R�	���4�/�{�7'�\ȸ���F �˧l�
�s���b�� ����hp�O�NYtD �����aC¥�,�,�7ϘbhH�&�_؈:c�Z�3+|�m|�SF��s�iɣfe��U�f�X���c�^+�[�}k���h�V�B肤��
zy�v�h�n|��;�m�!"��p*]��b�䂑����Q?�7H{���Ӟ�&4��$y�i!��6p����0��"���͠���@A=����ֹ���1�:�5���r�	�̶�y��5蠂u���=v��A3*�޷l&�i�kCb^ !��o�>�u`�5�z�r�Q��>(M)��T�,�kK��v�Sk27�|��nMR{���׸�tj��E�s�ր (�*�в0�I"t��j�4�_��D0*aܒ�<��"ɽv�WE|;�Kg'o��6�1�aQ�	���wP��PV��gI���I�fy������8������ҽ�њh��H)Ӭ�F�|y��nh��Lz��Go��Ր�ߑe2xx������(H��7��B͚ԔP�]�X�SGMN��t7�Y���S;*ԟ�]�_��������5;b��Tȿ��W ����!M���-�D��h�f�´�ڋ12�Ӊ9�H�m!4WƏ*���9S�=�]�-��X���ጯ#yDX�ӵ�ػ2������Ƃ�����J�~z��uA;,�/$��"#���v���^oO���
LǉIJ<�d�G���O�vˬ&=�j�E!� ou�������M�ׄ���Ԇ2)&�p7��ؾYQi�Vx�w�V��i �����r|�{���甫���ζ;�9V�ɨ�d0���$�ޛ��N+��	���Sm���S�06#��ȦTqM�����ُ���L�QJ���.���E�p�T��S�e� �.Ha����%�%�{��x2[�[�K���71��<(dӫ��c@�aJ�J������쩼���_�o������a@� 3 Q�U�H���C*K3�#��1D�l����YD>e�e	�ʏ���B�]�{;��O~R��c���x_�nr/}mvqO �&�W�9ivڝ��D#ۉ%��c����]����$�ד{�ʖ��Ds�te�
��L�
毋�[2�D��^��"\��>��h�U�~����t�qg	��\s?��7[�������b�&�p:(��}|�֭��3=�         D  x�mV]kG}^���������V��;�Z��hc4S������}��c�)y�Ĳ�M��:P�}�èzҟ��s��Jvɋ�3w�=��s��d`Ig�Q=Z�///G;��=r�wX�omkFMS�G�2)�E�^�w��d�M��茬�^SZ����G1o͏,�}E�_�:���ȏk���-����?����Ù�a��IirZ�?�X[�W�I���\�HNr@�R�_�	���t�u����m�i���.)��-�$|CR��Q��Xr�xhh��~6	��33�����q��~�̑[�'y����G1�-/�hu�3�����C�"?E.��2�wL�y��4��2�sf9~F.�e	K�qN(g9�(�M�7��)I>i�#ŸS��S49�#J�YJ�#r
j��E�e�#���SBi�Y �)��]�	D:���^�36<��,��&.��H�R ����<�|�V���+#1_�r�M�����I\�����B�5{A�&�ֳ���՝,жJ#��@����ͥgM�<|T_[[����ٵ]������;FI����D�{=e��HrF�x��}"T���"Y��^VYS�nx�aC�@2�e�A]�e)R��E|�4��"��"Ԍw:�ʯ�H��Z6CVQ���k�&d�����Ֆd��7�i�iSK>\ܩ�Cզ=>xPɢ�����mWj��]pd-q%f���m�p�$�m�	j�@�;�*��hW�:?��3F�)䉵�W���u^�37�,Z�%L�ӻ���:%H��N��y���n�1e.���˻CNpd39e�LirA��$g��\@�
�Wa����ͭ���l�̋�į�
���^ɩ� �+�.�2�\(;��+q���)��b�L�x���Z��+�*-�)Gؒf�.�Az��޾Jh;S�6TGuL$��}����}�ch)^�Q��\]��m�2#�5�^�!����VWe8=�$[��6fK�܊�Ƕ{�.L�r�{�^mH3�'V6��V�3����dq��ő�[��r�����X�Dy�� q��M�2p�R������
�_Fg*q:8t�(��q�\�FO�d2 62f�X�q��������,	�8�R�f7�O�g#qD�h�������>P��6���%7Qi�H�訲��N�Q�'@ ϸ��J��c�TXS5����((�j#Ι/�Le��t-��p �!�)����n8z�?�K��C�Ȍ������)������y=ܬ,��	� �P9T�TL~S��t�1���Y��B��H>� %ؽ�:>C����#s>B�:úLg�q0�%�����KKK�����         �   x�K,M)��KO�L,)M��T1JT14P�/3�43J�����r�q5ȭ������K4/�*L
3��4�pww���K�<�T��rlñ�y�

!�w-��LLI�퐞���������txM^L)����������	WIjq	�������f>z>�IA���z&����e9�a.�^�FF��f�!��.�%��%nyᜆF�&�f有��H�D�4W� �]O�     