PGDMP         '                w         	   BookStore    12.0    12.0     '           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            (           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            )           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            *           1262    24601 	   BookStore    DATABASE     �   CREATE DATABASE "BookStore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
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
    "Description" text,
    "Author" text,
    "Publisher" text,
    "Type" text,
    bookimg text,
    "BookLanguage" text,
    "Price" real
);
    DROP TABLE public."Books";
       public         heap    postgres    false            �            1259    65693    Comment    TABLE     V   CREATE TABLE public."Comment" (
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
       public         heap    postgres    false            �            1259    73885    Order    TABLE     �   CREATE TABLE public."Order" (
    username text,
    product text,
    quantity integer,
    total real,
    date date,
    state text,
    productname text,
    addr text,
    phone text,
    payment text,
    fullname text,
    id integer NOT NULL
);
    DROP TABLE public."Order";
       public         heap    postgres    false            �            1259    73891    Order_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Order_id_seq";
       public          postgres    false    208            +           0    0    Order_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;
          public          postgres    false    209            �            1259    24602    RecommendBooks    TABLE     �   CREATE TABLE public."RecommendBooks" (
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
           2604    73893    Order id    DEFAULT     h   ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);
 9   ALTER TABLE public."Order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208            !          0    65560    Admin 
   TABLE DATA           P   COPY public."Admin" (adname, password, email, address, phone, name) FROM stdin;
    public          postgres    false    206   }                 0    32805    Books 
   TABLE DATA           �   COPY public."Books" ("BookID", "BookName", "Description", "Author", "Publisher", "Type", bookimg, "BookLanguage", "Price") FROM stdin;
    public          postgres    false    204   �       "          0    65693    Comment 
   TABLE DATA           <   COPY public."Comment" (username, comment, "ID") FROM stdin;
    public          postgres    false    207   �)                 0    32786    FavoriteBooks 
   TABLE DATA              COPY public."FavoriteBooks" ("BookID", "BookName", "Description", "Author", "Publisher", "Type", bookimg, "Price") FROM stdin;
    public          postgres    false    203   (*       #          0    73885    Order 
   TABLE DATA           �   COPY public."Order" (username, product, quantity, total, date, state, productname, addr, phone, payment, fullname, id) FROM stdin;
    public          postgres    false    208   �1                 0    24602    RecommendBooks 
   TABLE DATA           �   COPY public."RecommendBooks" ("Type", "Description", "BookName", "BookID", "Author", "Publisher", bookimg, "Price") FROM stdin;
    public          postgres    false    202   Q3                  0    57362    Users 
   TABLE DATA           X   COPY public."Users" (account, password, name, email, address, phone, state) FROM stdin;
    public          postgres    false    205   �8       ,           0    0    Order_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Order_id_seq"', 18, true);
          public          postgres    false    209            !   $  x��Ի��H �X�����;ي"X��P�&�  7����&L>�{μǾ���Ч{z����5��������F=x��3E>O�Y� |u��v�r��W(�g��!�9�n|ԁ#�-'��L●���[��(�<��R�k��3S�����Lؐ���B`�z N�y3���K�Z³��D���s꟡�B4�r�0�;��a���-oQh�mF2�Sx�^�s<��J
|#�/ZӝV:���f�1�7����+��y�(���j97�RK���Y�(�����|���9Yj3��4�@��ܐѧH_O��8ʂ������+�p�����@%))T�ϴJ2�4&R����J�� c�F髻�����O��߾��OJ��6��~�命����L��s$�z���"����M������0�a2�ܶ����'~�����I�LV�^��l�ļo�y*���4����_͘�	g�}���CQ�S���ɯ�q@p�x�r����|�$n4����
�Co-I���l4N��� {AU����z���yqB�U�-�CQ�L���AϜ�7�c��)�8�(������遟�+G�+�k�M2�`��K�7<���p�GQ��Vu�K
��X�o[����ۍ ���\��F�L��r]Y�5��S�c�s�Z�2�[0��Ľq����y�a?6\��}|H����E2�0�9W�GՕ ˍ�z3o$"�G���ȭ��Kih�������c��K�Px�r�m\-��f_D>}�;N��a�t*�O4���k	5�GzE�����w{㽕~����[��         �  x��Z[o�~^��A�iB��X�Ka+m�8V�H0Z�/��;��,�Y�S#��h��(װh�q�D�E.�0�����'�_��3�$%�h_b��˹|�;���,��c��C��x2����@�GccՏ��\�+X��V�`�\�*�wT9?Se^mM�_[NƏ�J'�;����P�{�3Cߍ����5��hs�}�t�m�V�yF_��d�mUAce띭�*qH�LF��p��Ual�*&�����	���G�l/6tx
�~TЍ��k��ѓ��NF�*E[n����!!p:�f�6�Q�6�r����&�p}��q=,�bUNZ�?�JV��g�,B:A��mZy��|�"�T�[�vpEW���m�;X�i����a�.�N�>ՙ:��lH>X�5/\g�+�3ͮ��d���^p�D��iTD����.,��HN>X�.��4X'�n�L18zS�չ��� `���(!�-����!����M��'W�VuIі3]=4-����֍�3lk��)��Ǵ�a
P��a�������o����[���%!�Z�)���ϥ�[r݈�{1�4	<C��Lՙ��Ŗ�6����o�Nƻ�ZZX���d��Om��Q:ٻ�r�K�3�P:1���e�1�2��̒d���J����w�L��M�pp�[G]�Q@����#9�����C��R��;�b��'��<�Ȓ��?'6�na,K{n	I�3�7+@B��}S�)c����6|材���؄���PB�#�@�|S��4�zx�J�n5iO
������!R�B�`E�Ӓ$�N�-C� :=rV�$�n�O�"���a�0��7�l;H�(s�Q�w��덅�~j��Հ8~�?`=:aO,tGhPv�����=�'aH����m�~�򞷩��~���	�[�3D�[�̜��.����o��Hd�^�H�}m�L_���<���@[�>
�sW���Z%Ű��XW)A�B�����:�"_��(�ت�m㼽9�3��!�['��٬C:�9�>��/�'?;���4�q� ����'i<�����=���)؎rզf'���1��g!|�>�I��un���N "�ۈg�u�J{e��l\tuH�aK}<0�.,-r`�RNz��0�<��֑ ����S$��aNr��[�7#�1�q�ـ��=0�W���6�ؚ��-�kOP�;���'ʍe��t_G��BÌ.x�����wW��/�������q	H?_���<�TX��f� �e�Dᱜ{��һA�&��*q� k�4���"�b�/����^תzH_��U�2�ߚ���B������<�i2������~����v&GJC��ŧ�eV� v�ՀX�2��v�������.�{��B�㞂$����-���gn5��B���L>l���m�:R�o���oz���#S��+�
.�z�K1٤���ŕ�!g����9�Z\L���� �����0X���c9�P/y��c��4����\ �iee�B��!髙����6Jt�鈨�����P�y6�O�|׆�ǩ)<�q)ĉ�-0pi�Q�G�e.o
�8#���rM�o%P�Ȁvxi�B��خ�k����k�R�[�]���X$k��6t�V3�����Jz=��e/��Ф�ʂ
ml����P>�޹��%��s(1��	��5�sT�!��ƥp+$)}��4��p��dt�0����pZo�n=L�%QPq����~!��������a��Y�5��oP�D��~n�1K�d���C�!Nj _?�*�!�<�@Q�p�L�}�"j���N�*%�<�>1�0�ĝ*��շ�0�/8�o�2���%.�rN�k{�&y�G5��c����6��`F�D���2�|G�BqMw��i�I �/+8Y����$U�o�?=�8�;��>I�Tj(�Jp���ԭ��X=�7?�7-`6�añh� �9�S����yX".2)���(%��8��/Jȍa��`�0�G�Ӆ�������q�b�A]�>I���!z��'��á��qW��x��5���:3��j-���E̙O��
���U��L3�1���1���;1b^�?�"��Y�B�W°�}9U6�q��8��-����r���z_��mN�����Z����n<��D�3|}k�HvQG�&G8co�>�B���lw�թ_��O�y1:|c礣����s�`Cr����Xq�	+z��'�#"��o�ޥz�5�&�3<�k�� Å3��N����zV�wZ��I�`0�1a�cNJf|�G\�+K�T?&���j��N3[�ѱ>aq��3�ݖ�X���de媓m�"*���4�W	����V�0J��2�N�j������~�mDI��@����>Cw*]WQה&�z#��Ua��d�.�����t�	P�E�$ܟVIiN��:n,�PD��
�y��*�hQRSD;&쟮�u'�k� 1��P�-�If����v������
��a��t�"����r�1�}�m�Y�^d����.y��Q^���Ԭ,���\X[S�+�V�/|�����j���'T���g�uh63�8�M�������,�L���gϻ6c1(3��w����/�{�a����KsPkQ� ��=��/F�!�TXb>b��Bm;�2�����S�2i1bbA!c��G� �Ϟ
�\k��"Z�},m��J��p\)uw�\`�-_�C�[��w,˂n�i5�WT�"��K�TPp3 ���r�e`�n�r!֟��E[]�ȇ���/�ʨ���3�l�Ǘ`T8o޶ZC���-.�1�ǀ~2~�t��$�Ē�r���v_R�9�ω�~|�R�<f�?6/�a�y�����{������s驙Q�6�X�����q�[aX��T���k���ggl�F�m�/��~���)���"_y��b�F֩��]��Jй���2��]@�X�a��x�aL�˿3��7e;XGL^��\CL��sDs���:�Q��3�!y?(�pdV�{a�RGcX�QZ��@��ds�[ʐ�{���iNAG{�.�\���pdkm|BLe2�#t��߽�̶��븒�1�1s��9��4���z��NGԟv�C�\�_�B7��Y�\�(�<ʕ^�����x�[Ҁ��NB�0�q
�j�C���c��.������S�![����g���W[~�*��yZ�Nl�[�E��c��`-���Q�l|P�ԭrX�2���S&�Af$�R�4pc�~��),�q�W� m�|�&j�'����ߣ#?T��%T(�	�Qu, �����B p��&���xD���Ѥ53�Z��΍�Z�51y���׭�@���<�G
s�u��B�9}"jz��r^���|TJ.�?�����2�2�e�f��M�Hۿ
�>�y�0.y�1��"��X�=k&Z��	k�Df =OA!�]r���I`�
 ���.M��Յ��=B��~x�pP��ı��9�3�I���b^�Y
9��2�<ܣ��[��3}?]�oE��*�V\���9�"f*�P��t���q.�$m#�y�Q��J߿ڐ%���>������o�^d���P�wg33^p�_�@��
<zY6c?�h=z�Ó�5�e_�G��=̔���rT�7��p�*�{����{�ԫ1>hx@�*5n�&�g��Zk��/���=zx�0pO�R�V�n >��~�$O�;�='�hHC�8��Ƚ�JS���ݛ0vOMG�h2#N���V��U�|j�N���$ʜ����}Y�a:��}l��޹���N��}�ԩ��;�      "   g   x���HL��H�K7�,>�09C!#���)??ې+&e�	TD5�,)�|���"a��X�R������XR��5��ᮥ%pCM�M8���S�Xe�l�b���� ۀ?�         �  x�}X]kG}���Ͻ���7����$�F�}�K�g��H]=u͛����Y��X�Aq�X(��g~(E���K��{��C�ef�]U���sni�(�n5.���_m�|]���f5�Ǐ���5�;��43��̚�^=76z�^��gf�r/�ًmj��� �g=�Ofl��M=:�Gf���J�;lk�Anr<)L����<�{c���6�H������ч�У'����dG���*S�79>�`N���	>� IM)�&�c&$��������2��o�]C}�F�LL~50I=~�ܽ�iӬH<|�#X����׶;̽�G�;�����B_�����Δ}��43%cd\�L�0���d��s��r�~��@7H��I���ĕ-�y�*0��3�lף��)����0|F:Lx������z�[��G�����.��6s�sӇcp��^�mbG|�
7��|ͫz|`Mǽуw�|R�2e�U0��~���Ͼdm"��H_�U@�����M	��y��?S�!ݾ��8�h�Kq���$����u}\a�,1�OӋ�ԍB�w4�@B�0h_�zh��Rj��n31�ޞ&�s�C�J$3m�ʻ��\����i�㊮i�P�Ի�-G�i���� /7��e��ܽfw>k���=��O����{�ː�w��B�vT��k�#_L��Ze�V����P��Gp0����8�*-d;D�����2���8�h��ԫ��b>�;RJ��U�#|�w%|��[��3צ{/��v:�nl��΢���H�s$h
��D���ߜ�bp!�br�� .��u*d�]�2n�1Ã���&���?i;a�p��Vw���K�X�Y�	n�1��fc�0Iq��6(0��8��7�Ɨe���x.S-y�U��v'iackA���쵛�w;�[�o����
$�ύ�J�U$	<}��W���^5nh`��iz�����d	�����a��,���d5a�$�BJs��v � �ހȧ����gi�|]��tV�X�N��h�t�j�G��������k�@9�b��{l.9�fT��o3*؊)� �Hb^��v!��4�T}�+`�=%�z�r�Q��<(K)���4�k�J��v�SjR7�z��nMR{���׸�lf)��5k@�~�'hY�� P�\�Bz�/m�oE/*!ܒ�<��"μt��y�F���N�6�dc��6X|��o!��tBY`ϒ�j7�¦Y��.����,]�;��Oo�vcM��Xd�YVD#��A<<�|74{�5C료��Ő�ߑ�2xt�������Gʏ�G�m�d-*J��.S,���&�ʧ�۬
��������~B����{��Ǡ���~�Bl����R�#�|`}48��3���(eE�,\��Q{ML��t�B΃9`G�L���v��|oW@���k3�+�j8�Ĉ@htm����:#a�8Z�ߒ֣Db6�~F��.�棜e��|�Wd���uî�4����i��/�!��lK��ēOF~����"�n�ոg۝��H!��n����z���KB�'T�2ε��|�t���Fa�fE��!�?@ X��'��V8f7n|5'[�2�:�)�!S���R��_;��I��3{��v���aӝ'�#�SD0�5%��ȥ�p�����;�CB}H�%n`{�q��쀠q8M*Kթ�2c������$���3qI|i�mOJ<,�-���z�[�o�v��e�/1 �0"��O��[��|n�T�Ԁý/\6zUfz�0�az��ߨlH$���!�%)ő��CLP�`��h,�"���D�G�v��ă�����g?�J�I1�Kv�+\7���2��$���+��4;�N8K����:������Z���8�דK�����<s�se�ʳ�L�
�K��2�D��޷�<ܹ�:�yh�U�|��o�h:и�������A����w�B���u��M�TP������,}�\ZZ�
:=      #   D  x�͑�JA�빧�^n�7�!V6Z��\��q2+箘VK�	4�X��U��p�o�^!
J+a�]���f�㭇y\O���(�Ҝ`(e�4	}�e=�6ל
<��g�\�5�(Q�����E���Z��J4oT��yr��v�.����0
�(� �Sh����J��ڮ�	X���U'Y��jϚ�9ln��ʝ��ĉ����f���?��Q�
-˩��9�Nɕ �O�4���ɧW�h��;��͂@��TjV�D���L��X���Vt���`���n1�nڑ5/�rk"�$�;�.T޼�ڮ�om޸�y�;�Y	k         7  x�mVMk[G]?��������������)Ĕ�?�T�͓�y��B�`�!�xB�e���u�TZx1�V��'=��H�KVz�7s?�9���_M��e���m����{�6�t��V��£��ִ�lk��Sr��rf:|a)��+ʧ�W��|/��蜶��C�.S~|��%;=��"��*m6,��txl�����?mW�q����4:�}J�QԚ�dq���4�Ґ�i��9���(U�6�8�t8;�/	G�Rl��(��#�M��� ���]
�ڟ�]p8,s���=G��R]�O�)����"�cg����#�g%m�SS��79��BM:��MV���0�T�њʔ5N�dC#�O�t���
rXZW�^m�A����B�q����_����~u-�b�O�M��Ei�nI�r��E�^�w�N,wxM��T�2~�.�����~+A�3��S>!����?���1�S�3�i�&Iб��E,���=��d�f��@����˖��v��`p �W��W�1Ahf��ii�ɓJ�j�`���j:짴���U����*Q"-�TH�����Y.�yO��"5R��KVpM(���������$g��H,U�?E2����,>��" l���zп?�Y�؊��-p�z�N����l���y#�3G���1ҷ4��R-��P�Ӫ-����*�oxD��psX����7��(L���E�K�]�ɖ.m�<�Z�.�~��x_��T����}�`CBKBv��[�ebwKe�#����C���>"��r�,כ[V;���B�;аaFZ��3�$�UF�Z���W`ȿ�ȴ���}�I�Lj���͍qx�zE�A�[�=c��mY?�{z��Vu���ܱ�C�C���;E]3�����.*x{0g(!H+C03��TF%eG�#��9���
X�ya]�XM�c^*z�����0s�{g,��$L��;�����|���+%������7[��Soy���A6b�0�=\k��,��?�BQ�Oat��͍�7Y�l��f�Ej�V-Rs��$+(�늠�^�seWq��(q��Hr��2�n�9�7mQ��7��GX�a؈� �U�s��2�(��U�T�/]M����p�&YY�fZ[+#��������&D197�:.y*����F�*���y~k�V�+v>�[2�������Eѿf����ml�Xܿ�Aq�;V�J����@(����&b�� qp�5�
p_W;����������3q:�s�OĻg9q�J�x���.@�[a�I�	W���x����v��H���\�-���O���ϫ�M)�'          )  x������@�c��Z݈� @ Y�@�r2�1:�Ё �8t��3�r�q�{�&^�Ȧ(���N�S�3���� �ž�!Ha5
�H�,��n.����vV�WsArX��͂xe�����#�Q�ZO�FT܅"��1����G�H�ļ��p�V|<|��`�<���~e�����Iҗ!H�fX�~A)��~�?��7���ht�M_���t6���ـ��-t[���F.qm\Uz�<�,K��s8C{Vt���N}�үf�E��,��B���c)A%�#+��pc��lE��$UǮ/�]s"Cy0j��q�#���y�q�o�4��@/�>�B��X�ېښ	i�	2�NW}��<*�� ���� 0	�f�d�Q�꧱�S�Gx:��0�R���(��o	L9Wb]�"E�w�nd[�N�u���Ʋ��LE߭%�.�_�Tl�!���>�#X}Pճ��gTz�T�L�X���@fg1���W��E_�(L�'\�1J�����j�\��m�vbr�/˞�H���_��3=���w1�A��14s��^�T~Ȟ��     