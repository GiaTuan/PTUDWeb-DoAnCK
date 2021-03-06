PGDMP     +                     x         	   BookStore    12.0    12.0     +           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ,           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            -           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            .           1262    24601 	   BookStore    DATABASE     �   CREATE DATABASE "BookStore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
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
    "BookName" text,
    "Description" text,
    "Author" text,
    "Publisher" text,
    "Type" text,
    bookimg text,
    "BookLanguage" text,
    "Price" real,
    "BookID" integer NOT NULL
);
    DROP TABLE public."Books";
       public         heap    postgres    false            �            1259    73900    Books_BookID_seq    SEQUENCE     �   CREATE SEQUENCE public."Books_BookID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Books_BookID_seq";
       public          postgres    false    204            /           0    0    Books_BookID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Books_BookID_seq" OWNED BY public."Books"."BookID";
          public          postgres    false    209            �            1259    65693    Comment    TABLE     V   CREATE TABLE public."Comment" (
    username text,
    comment text,
    "ID" text
);
    DROP TABLE public."Comment";
       public         heap    postgres    false            �            1259    32786    FavoriteBooks    TABLE     �   CREATE TABLE public."FavoriteBooks" (
    "BookID" text,
    "BookName" text,
    "Description" text,
    "Author" text,
    "Publisher" text,
    "Type" text,
    bookimg text,
    "Price" real
);
 #   DROP TABLE public."FavoriteBooks";
       public         heap    postgres    false            �            1259    73885    Order    TABLE     	  CREATE TABLE public."Order" (
    username text,
    product text,
    quantity integer,
    date date,
    state text,
    productname text,
    addr text,
    phone text,
    payment text,
    fullname text,
    total double precision,
    id integer NOT NULL
);
    DROP TABLE public."Order";
       public         heap    postgres    false            �            1259    73909    Order_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Order_id_seq";
       public          postgres    false    208            0           0    0    Order_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;
          public          postgres    false    210            �            1259    24602    RecommendBooks    TABLE     �   CREATE TABLE public."RecommendBooks" (
    "Type" text,
    "Description" text,
    "BookName" text,
    "BookID" text,
    "Author" text,
    "Publisher" text,
    bookimg text,
    "Price" real
);
 $   DROP TABLE public."RecommendBooks";
       public         heap    postgres    false            �            1259    57362    Users    TABLE     �   CREATE TABLE public."Users" (
    account text,
    password text,
    name text,
    email text,
    address text,
    phone text,
    state text
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �
           2604    73902    Books BookID    DEFAULT     r   ALTER TABLE ONLY public."Books" ALTER COLUMN "BookID" SET DEFAULT nextval('public."Books_BookID_seq"'::regclass);
 ?   ALTER TABLE public."Books" ALTER COLUMN "BookID" DROP DEFAULT;
       public          postgres    false    209    204            �
           2604    73911    Order id    DEFAULT     h   ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);
 9   ALTER TABLE public."Order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    208            $          0    65560    Admin 
   TABLE DATA           P   COPY public."Admin" (adname, password, email, address, phone, name) FROM stdin;
    public          postgres    false    206   �       "          0    32805    Books 
   TABLE DATA           �   COPY public."Books" ("BookName", "Description", "Author", "Publisher", "Type", bookimg, "BookLanguage", "Price", "BookID") FROM stdin;
    public          postgres    false    204   �       %          0    65693    Comment 
   TABLE DATA           <   COPY public."Comment" (username, comment, "ID") FROM stdin;
    public          postgres    false    207   M/       !          0    32786    FavoriteBooks 
   TABLE DATA              COPY public."FavoriteBooks" ("BookID", "BookName", "Description", "Author", "Publisher", "Type", bookimg, "Price") FROM stdin;
    public          postgres    false    203   �/       &          0    73885    Order 
   TABLE DATA           �   COPY public."Order" (username, product, quantity, date, state, productname, addr, phone, payment, fullname, total, id) FROM stdin;
    public          postgres    false    208   �7                  0    24602    RecommendBooks 
   TABLE DATA           �   COPY public."RecommendBooks" ("Type", "Description", "BookName", "BookID", "Author", "Publisher", bookimg, "Price") FROM stdin;
    public          postgres    false    202   p8       #          0    57362    Users 
   TABLE DATA           X   COPY public."Users" (account, password, name, email, address, phone, state) FROM stdin;
    public          postgres    false    205   �=       1           0    0    Books_BookID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Books_BookID_seq"', 23, true);
          public          postgres    false    209            2           0    0    Order_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Order_id_seq"', 3, true);
          public          postgres    false    210            $   �  x��Թ��F�x�L��Wf!!�8$�D9iⒸ�p�ā3��nվ��Ě�05���r���~|��yR��8|��ǹ��:^<QSOvɜuKN�%�A���#�(�t2�3������8Oo/c��(�I�2~����2�O12�/����i�s#���8z��@��X��fOL��<�-��m_J��p��h��ٹ�O��n��т�5�͵C�F{��Ee��y�Z|�^�MO�-�NJu�܌7�
~���+�ezo����)v�J͍��������w��1+�E���v~$�Po��Sd�'�y��%X����60�M�����sV찰Ps� �����v�_P��Q������������+�/b�lڿ�������*�c;S6iR(e���8�X^�]Մ	��R����*g�����
�x�{yj,ς4+W9C
S=(e��)�J&,x|��K�k�R6K"���t�P)��������;s>l�Y�P�tzہu��P��+�X�����'��K!z>��� ��ia�F`#1��Y��\4���c�L���9���@,X���d`s\n�O��C^�W� ����hڞ�s��&�h9\o6Z�Zb8���$� �E,�w��o�v���n����R�������Ҋ��ے0Pz��]6H <��A�Hy8�<V�{�2<�ț�N�;�ѸoZ;7ǩ*�� �R�@mM��=�0��4Cg��p�7��z@9� q�$ȏ!��]�-�x�@��R��� y< �i�n��G2xp��ϥ}X\R>��c��藄�F��M����m�G2��^]K:fM_�*�I͠]�T���e�,�����?�x�^��un��,�(�O/�2�Ә\�{���!N�f��:T�
��|Xv;wvM�PH��%��B���Unn�֓_�d2�C�C      "   �  x��Y[oG~��R�����"�n��(x���/5=�t���C_��'X+��ʢ�Exl��$	�1#����?1�%{�s�z�m)�>�gz����;�9U���H�d4V{����~TUW�ʄQ��l���d44*���ӛ�d���V�o�rX�@����y�������ɚJ&㇅�_��a�L��b�]O��d�K��jW�H��VDFO
e���Ӷ�� �r��$�d����5U�,$=��*U+��Wm
yV�����ho=Q���.<Z������k9h�xuǨ�za��xȇw~*TBϕy=��*=,x�G:���+_%�sO���d��c�����q��$�I]	�Օr��K�ܗ���k|������	y�(J��%��}r�>mv�T}rH���iXPT/�܊N��<Xm�ᗤۭc�iw�������x�v(�A�طrҗ�j���dH�oI|���ն��$�u�
v�OV���f��$�f�~��a�G������L�Ҏ���ܴe�"�?�hoݴ�H�u�:���F���ѢL�"��~�)�)����ɠ��(

�� Z��;v�uf.�X�r��.�|�8�R�}������-	��#�������pb�5��d_!�k5I��BU7�bi������͎����R��!��I�-uA����u���H�F�;"k+��Uژ�O}��}���V-Y=�����[�:�3�y�k� )otH��n��=p�4<��D�a<���(.`-C1�\! Agd)[��V�e�iԪ&�B�,��������ҫ�	�g�*a=������,�o-�3&�������]9շ	��b���a�"o,�,Vy����ѓR�*��nc$v8�b�1B��'�|/�8�Yř9a%!�F*?P,T����}�P��5�!4e��}����oӕ���>��Q�����`F�;�Zȉ�c�a] ��OK ��x����d���ڕ(�QB- b�ed�Ҋ�􀬉�+ �7�E�^B��~*�ᒐ���1�n|,%K�j�-c��u3qqQr����z�C{ Z9S�d�!�toۉ���X2�A�~�2$Q5r����	�;�9kܣ���`�$�ی�m{�쬫�|��v�����.���ɀ��̜P% ��t�Њ�1��}�t��U�����q�Tϐ�	'C伤?b���7*��W��=E�u&68�[T�$���{�@��0|��c�f6Q9�\U r�87q"��c|��ؒ]�����+��
P[�������K���@B�)F�O��9l��$���4���q��&'��D [cL�F{��N^+�WB7�3r%�d8p�+���tҀمC�j�S��x�[���"�8�b�p�|c9땦��X���P(�)~j�r���'��ޙu���AZA���ʃ�uNu]��2Ƴ���
��D�GqL�V(
y�eYoҕ �UD��A���2�C�)\WA/*���*��V~��<��&=ZC��is�A^�AG�����舾��ޑ�a� ��\]tQf��m
Z9���#�����r�'$FP䪻������/{�8����UX�I�0�{J��)��2��P��Bh��� ca�K�^��mu�P9Hi��/��rE--�N]:����ǎj�ۭ?�Յ��0������u���=�����fA�7�����QZ�犔4�J��3:�uF =B%��օF�y��	�M?�6��5�H@e����H�M��Z%�ּrTB�r���j�Wܧx���X�/7��R�.�°@)q������| b�ʩ(��8R�m�q2>��"~���{���H,�<��QU�u���Z�{�M�	���i�fi	Ub��\*KhC�ly2�m�-Da��Q��He��Y	y�p׷�\�&��KM�A? ��"�)B�Z@�����ecA��?P��4�!q���~�e�_n�ǖb<�4V�7��H�"Uʧ�l3p#�an�L9�E^�X"J��~r��m�u���˘�Ik��H&,G�/�#�l����k`M����(Bx2��:q|�RKE��`�W�6��i�_��0fF��N��ZBN�'9y9���du��E�L�����gZ�sܲIw�% D���w�z�u�j!b)TS�M �~�@��d��3��Am��r�Q��H\�O<�e~�ʹ�O"p�,b�� N
��#�{�$w�������ź,�c�(��E�{��4���q}?~f~����ަ��3T�:k�͑Y�6�p>�Վ���^{|��Ǿ�Dٹ'�N,R�r1K�B&ڐ�*f���"�&�vB[���.b����J�Jb8Dg�لh�1�`x��& �ܲ�c$6�3~Cl6<6��I.�M%�=��)�dy
 Et35�����~�5a3siW� '�BV �D�1��'�&�ּл���_�&��>Z���ZK��]�˖J��o��͖`D&rL��>!Ǘ��5Q�T7r�B��Ǎ��t��7Vd>���q ����x�v5�p�MQ�Új���ʧ���H���0�L �f��iMo�&=v�L�����,Vx�%�QM��17Ĵ>8���8�9ҌK�c�g.��`|��ݚ��u$En��Q���z{U&d0��ߦ�l�'�LLg5"w\�+��9[�)2���{[+i8/�!�)C�����_�jv���.\�I��ڭ�5�������>�j�K�ۋ�ˍ����}09N;3�:9��h	�?&���pQ]�Z =�xa�_X�K���,r�XI��u�؅���k*�	'Oo��d��vp\G��c{2��c��֠��i/v;����u�<"�|�2������H��Z�f�:�
(1� ͏��|T���3KBE�Z8�6}n$��C���H�	��:ֆڇ�_�)���Z�5o�\'Liu��]�Lہ:�������r=���+�m�g$;Tm�,۠o]��xL2���B2o�L��e�F�����Phhcc6	��~i��ܢpW-l��8Ӯ:H@�l[̍�����hg��OZ)��';�,�%nRm�a�r2������0f�k��d�����].@���)1�&��.���ᛑ��;�Kp�)��Q���a`c���	�,8�go�ꡑ\e@�������:�t��\qz001�Ә�6�ʬ�}�W;"O
�ơ�ܣ�$l8)�f�H�\�[$|��bf}[�&[`�yNI6eZB�`�S���ш�H@h/5��Kk+ɽ����v7����m6�v��劎U'�!�~���K���d�eZ��}4u�D�����O�9s�uj�F�e��v ���p�x����.�����8���ua��G�uyq2�<�_??ǿQ���+�@;}���n�F7/\8_}��ϟw���: ���6Z�M�3����?D5}�~�-�ߛ"�Li�����;=4��Z)��a����x׼9�K����k\!4a+�o��;�&%�#�1��j��G	8
�7�*;�����Z.���];˶��Y�`%�+���2�Z&�rn�R!*3� ����I�+��#�*��UM��x'Sn�صF�"ʨ"s�>SQ���q���-�����6��+��I�`����'�xh����s!�6zj�5�&��"�@����Eo�o31�ĝ^�:�>c�u�9{��|4;�b�/��)��@#�|�7s�b�^�Ռ�:�D��Ybw�����m��Y��I;�jfK}�иưf8������[�t}�󎑽?yn��Z��,]4Q7�q�������wVu�n�.�oz�,��~�'d�fm�����<_ �L}�-����l�������wZ�r�����?�9fv��7(=��4��+�ͅE����_��,�D+��
��	��h�=8Gϫ���R���b������|��A��_��E1x���,��~�����l�����^��<ZM|#5�h9���;�r����'O�x����;��w��5��>�%Yz-YY{C?~r�/�����?#
:      %   �   x���HL��H�K7�,>�09C!#���)??ې+&e�	TD5�,)�|���"a��X�R������XR��5��ᮥ%pCM�M8���S�Xe�l�*8�,S�JN#(����*�4���9M�bfPV&�9�U1�jCNS�#��{�ى�@n� jm      !   �  x�uW]OW}6��*�[�4J}�
���U���������v�]��REQTE�AUT�4
B"	�*l!��?�_�sf����X��;w�̙3s��Ξz��Y��-k�򭤴����~���I��Դ��&���Ѡ�����|۬z����f)�ό�z�iR��M;���֌OSZ^�����/b���L%����;��Y��y`�І���Ȥ��+�{�l�0M,z����F��h������׍ͧ�ؐO��kA���OL�!g�ښI��%� ֭�d0f]40R���O�E���_�(������f��ĉ��q�QlB@�<6)!~��@1q�7�?�M=�?Zs��K�1��7��m��*1"�ǰ�z�j�K�V�|`�ػd5��;�} c~z�
yּX�0�o�fG���G|�F���t�F#zYl�=�� �'���U_�$)vf�f�}� O˥�z���-[�Z	l�4������
�&`����sya�v���C�c-(]�?���V��F�M���[3,ݸ>=;35SZj؎���bs'���Wf��|�=���f��ҕ��9	0mz}�D�pj䛄9JG�]k@$�Y6\�G2��Y��(�  ��(�:� ���"�\��l����M����B���ۦ"x���7�_�}ޥq��<�����>)��N��]|'.�/e��%�g��|;Я̘z�\��Ǧ�g/d�V�i����GG��+�@��<���M�{����]ʀ\�%�c�V�V��9h���,��x�!���es�jDg��y � p�(.�߃������d�K�ݦ{����푩,��A,�R!o��iU��]�r�':��73F�(Do�[�l'�PMO���NSdy�Y�r9{-����ZsAweM����f�Vq���S�q�	!*��`.�������>�Dw�"L5�P���II#WP�x�MY|��]ca�iZ��&����UXZ�.�χ��F%k�m����q��٩o��[ҧXCk��`��6�0}�5���rV3�Qv�&j<�|Nh�v8�)�����o�Ko�
��!���,��%*[�DU���>p�?�ÌQ*I
�P��q:0�;Ry�j2�\CC5�܅`LH̜���L+���J٤ �*�l�V+9�D�:"(�D��N�ϝ$����Mѷj'����gx�$�=����\�<�_2�j�c4Yd�H�;&$�j�
:�Ǟ$sΗVH��a�����TzE��ţH{����x(�b顠��Q�1ܬ8\5�eq4��������e(9���Q�!)x1Q�.Ë::qj�G`� )$˹�
W��%G�d�Z��L�n0�+t� WQCC֥��DF�p��{�<�{�C=UūOս� eT�T�:�t"��Ѝ��@D���#
��W��2_���8��Hsì����2�4(@�q�qS��8qv�+ޞK�؏e�ZOu��(	�4<��:ڴ+T)�BޑO�H�FJ\��H�zumZ��&LJ�*�55��^�xV8 ����)W}��6�:�nT��/.15�D��9"��ϺZq�I�JD����Na�Nd�,�1��۱�T��x��O�0�@�B��MO�}�ƒϑ]�˥y�$�)�ťLθ)��/6�jf�z�c�����S��M[5mk33__��--i����S7��z�d�+ZF��
DX)|��	�=L�ƝN!��1�و���`� i���D��է�[4b�/�!��8
�{wk����0�����Q�G�;TEEn/���/p7P�Ʋs�����^�,|넸�������|	���Z�$�M\�9��1����.6G	
-B�J���es�0��ӄ��q�ر�v#7��:���
�="w���� Wܥm~cb��UN�ea �DQ��ҵ]�EW���i?���J7�����q�J�F;���h�]V
�/yϻۗ�:�t�>S٭�ܺj�V�����Խ������B&      &   �   x�K,M)��KO�L,)M��4�4�4202�50�50�<2��b���ļ�����83��*
�KJR���+�SK8��*p9���¼tNKcc#3c�����M�0)��D��҇���q����ps��qqq �o.�          =  x�mVAkG>���Bqڸ�{kz���)D�zo�f��YY�5qO��1%�B,���ح�ڃ��?����{3+�%�h5;��{����Ԛ]���z�A�~>�Ѧ6�1j�xC�£��6u�ɶ))��Uşr�*�X��❢�*^:�)G1����Sϰ69���	��8��삺���4��˰�Uqd����ly|� �Aڦ��izT�)�FQ��dq�����Ґmk��)�@@�W7N��V�w9��a���1@pt����r�~�. �.O���8�9^W�#Gr���,?b�$��g� '4=��A���#)OrzT��uZg��S���|p���vD߫<�M�(k�6ѶF��j���}ķ��2�>��ˤ��ۿ�:��Lg�q����_����W_����0Z��|G-���t�+Gr�g�cҠ$����l7�3��ƜN�����RgPMXz����rdX/���$ �F ��"͇t!g�4��Lr���JgPf#�>g�j�$���c�ώ@�;S��Pq���ԯ&a���t����{��o�V<e����EU�cZ_]�њ�gvaۍ`�>�*B�������.����Gb71S��@K�1&��;ʶ��`�o��H\���� P�)�؀��f l��`<ȿ<I��؆X�x<^H'���߀-T�b�����̡a��F� *./ey��8��#1_���5�)��O��0���F��J�4i�Et�s�zH�*]x�j2���zm���?�f���E��w�F����.���4]�l�����l6ġ�ÜN���kY�}.��6{�w<�����k�p#���S��/��"�K��2z�:j�^�+��3�w�άkk8�%����^���ލL� E�5�ѝ�Q��Ìs��9��ʹ�^���r;f7����͎�Puͮ�s��uy& ��Z�l����B�^����pI
��-�����0�WˢPܤ�ˆ��]3Zߢ�<�PN�r^��d:���FF��X�D�'#��:Q-�=�ím��2��Vl�p��-���ӫ�Z]7�q���>$Q�㋇uMv4S��p�����G��z�`��p�t�DK22c~�^	Z�br0cmOLZ�+*֬�3�c�a[&,sёF΢9����$ �	j�*��r�e�ǣe������0�����U��}��H�Or׾��%O�o�l��0Е�ueI�ˏ����ʋ�dX�DM���%�B=1t�ˢm�پ��0�,q�� �9�R��^g�k�Y�״:�C��%Ű�!Z�~��UBۙҴ�z�������v/j7�3�GkUƶ��H߾������ssee�?A9�M      #   '  x����r�@�k�Բ�.�X,���L��$V�tA���L�"]�̤sJ2~�$�x )�bw�����/dvGz �@�4���F�\�P1	��l���7�r�4�q�gu#[h�0�#�+ Z4Ve�>z��SV_��<E�.{�>̶�_#�p_�� C�������^k�$E0I!n�}~J�>o~�`-�Y��Y�J'M�VK$�Yx=}w8g����٩�_⇲G�r�Q��H�o��,q��3�"�)����j��NґV�EH����M�[I뺊K�Cps�h� P	�m���,"� )�9?#@��kN��Mt�@�i,��ȩ?�֡��@ߓ��Fh��ze|i�keUw���p�{�U��y���DS'I߆8X���V�5��{E���r]�.�K��C쭼����Wİ1�����&����z:�)�<XJ�����d�@&H����AM.)���Ρ%\�οq+l��Tzf[�̰m*7b++5en�M�X���o�L�A�Kj��˵����+&�^>):<�h�V��     