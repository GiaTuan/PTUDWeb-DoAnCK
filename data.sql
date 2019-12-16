PGDMP         6                w         	   BookStore    12.0    12.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    24601 	   BookStore    DATABASE     �   CREATE DATABASE "BookStore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
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
       public         heap    postgres    false            �            1259    24602    RecommendBooks    TABLE     �   CREATE TABLE public."RecommendBooks" (
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
    phone text
);
    DROP TABLE public."Users";
       public         heap    postgres    false                      0    65560    Admin 
   TABLE DATA           P   COPY public."Admin" (adname, password, email, address, phone, name) FROM stdin;
    public          postgres    false    206   �                 0    32805    Books 
   TABLE DATA           �   COPY public."Books" ("BookID", "BookName", "Description", "Author", "Publisher", "Type", bookimg, "BookLanguage", "Price") FROM stdin;
    public          postgres    false    204                     0    65693    Comment 
   TABLE DATA           <   COPY public."Comment" (username, comment, "ID") FROM stdin;
    public          postgres    false    207   +"                 0    32786    FavoriteBooks 
   TABLE DATA              COPY public."FavoriteBooks" ("BookID", "BookName", "Description", "Author", "Publisher", "Type", bookimg, "Price") FROM stdin;
    public          postgres    false    203   �"                 0    24602    RecommendBooks 
   TABLE DATA           �   COPY public."RecommendBooks" ("Type", "Description", "BookName", "BookID", "Author", "Publisher", bookimg, "Price") FROM stdin;
    public          postgres    false    202   r*                 0    57362    Users 
   TABLE DATA           Q   COPY public."Users" (account, password, name, email, address, phone) FROM stdin;
    public          postgres    false    205   �/          a  x�}�˒�0����p� �݈"P�^j6A"7/ �r�d��Ŭg�U��&�M��=է*�I���s(��:�I����4��(	��͗ض����IM	$��w˽�@{�K��RՎ����r�|�cB#�J���3	�O���'~�� �9��|��[^=?��<L�?�$��"�����E'LJW;'��SSk�!�ez�E�g�'X)�]�R���3{���]��^u���a!N���������Mߕ�j��D?�͈lfV������P�{����G݃�d�q3
+~Oe���#>hf�>�`�:���}���搌�^yD;12C��4z^���A�%��g�-�g�1{㕠���V�����ɾgE�Aa��jd
45�3^� oB��#k����4o��
�Ί�BN�Ј����,_(�>���/��$��~yZ��sz>N�)��sm]H����l���v�2�� ;�	�A&�1RO��1��2 U�=Χq�\�rG!���l0��
W��ƶ�+)�%3��F�vLt1��>O���h�>6�A�]�E&�梅T���[�<a�c�W��:�\ҁ���z��dn�
�p�K��2��@k/�V>�z�
���_~�.F         �  x��Y]o��~ū\/#B�sS���	�E�
�Roޝ��Lv�evf�s�"Di�XUT��eK�,�B�
q1.W���/�y�y���U{c�ξ��9�9s1˺g�t:>,T+��_��/*��T:��-TQՋ���T��y2��e�x:�Q*���{�jU�M��h:����H�Ъ��a���䑦/�tptӨ�N�3�|M���BU7L���=���Q���M���F�{��ɝ Rr�.�"S[��C���iG�=�hw:����cU@�[��7�t7������!��Bܨz�vT�oINoj��d�x�j����k��7K��t�.�T�8�/z�jF�a?�Ο_YY9u������Q�r:�.V�jH"�VE^�h����I���޹�*����.k�������ɪ��vG�fh�tr�������L��j;63�u#�����֪�*��������0�~��-�ed�^L�g_���o���H���A�{t��/��f��q� &���C�Й��~H�k�X~�"�,���1���$�֊ޮ^��K	��]���l Sթ7 �а��R��ρ�N'�p�b�zn:��Z=�
'������X���AF?_+�!܅��KH�%��j�Π�n���d��@�PI��k�I!J��
7c�N5��ω���W���QL'?����l�\��2ea������n�������#��,���Zvц�#�(W�@����gӚ�q�QX��"�A��%��,G}.�A��b�9����_�����DKPDa_�>x�p�Z�z�D ������9ti1?J��P�~X -�j3�p�9_��DN^���BN��	�ln�YZ��s�Μ_�?�1
�t�t����ͺ+�L2���	b�tq�R����[k�C|9�4�И"J�k���+YY�,�EC��rx����HcrA��,_p�P�X�z$� �ѷ�6MvzB�6j[��bp�#�/��s�e� �3�Z�ά��6 �����t���RomeEN��<o�����;Gԁ\�"@���r5��k��mIs�`A�i�Y�2с|W1�-��k8	�B7�]���9��\��5���a��Ճ���R�0���-�l>g����ذ.��W�8��u����7E�E�P0/fE����M�{�F!���T�:���^G��Q@q�I{R�Xp������������i��:�=��4y�4y�%�j R�$�������B���� J�/>ޢ�%���)�Br��(a4�?�]�EoR; Uv+1]Hj-�Q0��)���	���&NG���v5l�Z%�8��1��Q����Y�ܖWQ����D]�α"A�ST��>�C�61����T�~ˑ�5�<y;b��8-�h_e��Ս��v������{� $�g���e�Z�D�Sz�\�zK�b\�Pq��mȆ��$���iDh���b�&���I�cg���3�_�m�q�J=W��(ۆ�a�T�2랅*$! *u�j��s�*��堣o`���S��\����'��D�6���9��Ɇ��S�&�۠������3�UYa%�t@��(w8���%@q��b���"Z � !] 1b�ޝK���۱	d��x��v��XdZ*9�m�yq�v,�T�bG;d��׼0���.�yp�.K�������fa���A���,��a�e��_� w��S/�.!ȣ����c���p�,8l�CoCrڐqa��2k�HnC>��c���a��$�R��M>����@Q[�,�p�-�,��Z���B��y�Ԋj���ۗ�pW�Sv�S��Wq���D.�D�)���[Kԧ�+���N���}��p(-�2���&A�qD��D 5��+*��Zz��Q�<�pz�˻�p�b6'%������ȅ���:�"� uK�[ooO'_s�s|5�g�>,�5�tU���Rc���u�&�nԳ�F���XI�"/R��@mkv��&��Ӑ��}�C��j]�&���I4�"A��nm^�7�/����B'gW�V91�!1�������(Xw����bK n�l\�j�L�d8G�p�խ��J�0�K����Z�t`H]�xj�w�u���V�crH�t�0�� ��m�|4�a��p҇hˁ���<�/t�RD�8IV�Y`9u�;��{���0�5�f��b���TSh#��s���]AP����S&_>&J��fF�9q(�z�����`��1��x�H}����z|���L�T6��;,#K�U\ݎɚJ���AR��'�t����\�jWT��b6r8VS��, #co��b�p[K����'�$,PJ&%^kEw���n�(F��D��y�/�Hh�mme�۔Cu�쓔������>1د��[-�EK���*(��fN5�JL7��`A
1����6��1�i��i�#�s�F�yI���+u*���W�+*j��G�8sa�1�-bA��\Ӵ̟
��&D0���O�Ɠ N�:���7�d��kr�5������s��"W�zɚ�$t�h�2R;ᨙ$�x��f�F���9�h�Vt"�@3&S�U&x�����u�q�j��}���Np�w�^�5��S<|oa���cN�g|�GL�Q�6�[I���mP��� 3��U���w�pu{���^��2�q��Df�6H�-Y���C�%�K���Q 8����["1�1���\ؙx̆�i�\����\;D���i���Hgf���JN�E�v��rR²�ɐ�[La^Eѐ�X��KEJ��-�恘�5q6g��D ���:Rb~Z8������:�����<���=@Z8���� !����|7Y���-��<K^?���:��z��,����4�~�ʭ�{��v�ZR����8�'=3����d�����s�k���|f�9vs[�[��*�Ss�/�P�2Ee���z��>��6^�1�wDv:X[Iz\qSV���υ����~_t�63������F3���~0�Q�2+�e���t��[N�3�[[����<�Q��(�\��m��j��,�����6�* ��Lz4�j�����~�¤�b�t��� 9�T��
�qg��s��
���a[���F�w:�Z�_��$����2)�����ۧ�ǆE�y���.�<����h9���A�t�;�[�\��}��Q�d���v;	�z\PȖ�����t��(J�;���ڄۅ�&�YX蒇��}_}L�"����\��R͍_��>�x]�vS���}B	�ϲ��ln丌��q��7Y�㭮�=o��3+����B�H�{�z�i}�������ѫd�bh�`�'�7)s<P���1��>Rs��@#�Q5gS隨��
xu:�㲔\�?��II�"�!/4F\b3�Xf�!���q�h�Z�D �/���ñ��i7+��~���Z[�Ol��$���PW��ؗ^��+H�����4�<U>�Q����� ��H�u�>��ۨ�.siQ����hWK�;�����pX8Y��V����A�qI�O��w�M���n؀ұ�[�Y�Tz�8y��q�A�OZ(͋�~��\�p���lB]�<�v"��ȕ��y���I��	2P��#�񋢮B�]����ԥ{�, %�E�4ʴ3��偖�`\S�j<�*w������ԫ6>hx@�*�`�
s����7���d=���TIʅAo�,w-��uً�,Lv�.����q�MNy��:��g� �&s�x�-_}�q[~��0O�I�ua~��]�`�tэ���޹�����?u�Կ�r<Q         b   x���HL��H�K7�,>�09C!#���)??ې+&e�	TD5�,)�|���"a��X�R������XR��5��ᮥ%pCM�M8���S����qqq �1�         �  x�}X]kG}���Ͻ���7����$�F�}�K�g��H]=u͛����Y��X�Aq�X(��g~(E���K��{��C�ef�]U���sni�(�n5.���_m�|]���f5�Ǐ���5�;��43��̚�^=76z�^��gf�r/�ًmj��� �g=�Ofl��M=:�Gf���J�;lk�Anr<)L����<�{c���6�H������ч�У'����dG���*S�79>�`N���	>� IM)�&�c&$��������2��o�]C}�F�LL~50I=~�ܽ�iӬH<|�#X����׶;̽�G�;�����B_�����Δ}��43%cd\�L�0���d��s��r�~��@7H��I���ĕ-�y�*0��3�lף��)����0|F:Lx������z�[��G�����.��6s�sӇcp��^�mbG|�
7��|ͫz|`Mǽуw�|R�2e�U0��~���Ͼdm"��H_�U@�����M	��y��?S�!ݾ��8�h�Kq���$����u}\a�,1�OӋ�ԍB�w4�@B�0h_�zh��Rj��n31�ޞ&�s�C�J$3m�ʻ��\����i�㊮i�P�Ի�-G�i���� /7��e��ܽfw>k���=��O����{�ː�w��B�vT��k�#_L��Ze�V����P��Gp0����8�*-d;D�����2���8�h��ԫ��b>�;RJ��U�#|�w%|��[��3צ{/��v:�nl��΢���H�s$h
��D���ߜ�bp!�br�� .��u*d�]�2n�1Ã���&���?i;a�p��Vw���K�X�Y�	n�1��fc�0Iq��6(0��8��7�Ɨe���x.S-y�U��v'iackA���쵛�w;�[�o����
$�ύ�J�U$	<}��W���^5nh`��iz�����d	�����a��,���d5a�$�BJs��v � �ހȧ����gi�|]��tV�X�N��h�t�j�G��������k�@9�b��{l.9�fT��o3*؊)� �Hb^��v!��4�T}�+`�=%�z�r�Q��<(K)���4�k�J��v�SjR7�z��nMR{���׸�lf)��5k@�~�'hY�� P�\�Bz�/m�oE/*!ܒ�<��"μt��y�F���N�6�dc��6X|��o!��tBY`ϒ�j7�¦Y��.����,]�;��Oo�vcM��Xd�YVD#��A<<�|74{�5C료��Ő�ߑ�2xt�������Gʏ�G�m�d-*J��.S,���&�ʧ�۬
��������~B����{��Ǡ���~�Bl����R�#�|`}48��3���(eE�,\��Q{ML��t�B΃9`G�L���v��|oW@���k3�+�j8�Ĉ@htm����:#a�8Z�ߒ֣Db6�~F��.�棜e��|�Wd���uî�4����i��/�!��lK��ēOF~����"�n�ոg۝��H!��n����z���KB�'T�2ε��|�t���Fa�fE��!�?@ X��'��V8f7n|5'[�2�:�)�!S���R��_;��I��3{��v���aӝ'�#�SD0�5%��ȥ�p�����;�CB}H�%n`{�q��쀠q8M*Kթ�2c������$���3qI|i�mOJ<,�-���z�[�o�v��e�/1 �0"��O��[��|n�T�Ԁý/\6zUfz�0�az��ߨlH$���!�%)ő��CLP�`��h,�"���D�G�v��ă�����g?�J�I1�Kv�+\7���2��$���+��4;�N8K����:������Z���8�דK�����<s�se�ʳ�L�
�K��2�D��޷�<ܹ�:�yh�U�|��o�h:и�������A����w�B���u��M�TP������,}�\ZZ�
:=         7  x�mVMk[G]?��������������)Ĕ�?�T�͓�y��B�`�!�xB�e���u�TZx1�V��'=��H�KVz�7s?�9���_M��e���m����{�6�t��V��£��ִ�lk��Sr��rf:|a)��+ʧ�W��|/��蜶��C�.S~|��%;=��"��*m6,��txl�����?mW�q����4:�}J�QԚ�dq���4�Ґ�i��9���(U�6�8�t8;�/	G�Rl��(��#�M��� ���]
�ڟ�]p8,s���=G��R]�O�)����"�cg����#�g%m�SS��79��BM:��MV���0�T�њʔ5N�dC#�O�t���
rXZW�^m�A����B�q����_����~u-�b�O�M��Ei�nI�r��E�^�w�N,wxM��T�2~�.�����~+A�3��S>!����?���1�S�3�i�&Iб��E,���=��d�f��@����˖��v��`p �W��W�1Ahf��ii�ɓJ�j�`���j:짴���U����*Q"-�TH�����Y.�yO��"5R��KVpM(���������$g��H,U�?E2����,>��" l���zп?�Y�؊��-p�z�N����l���y#�3G���1ҷ4��R-��P�Ӫ-����*�oxD��psX����7��(L���E�K�]�ɖ.m�<�Z�.�~��x_��T����}�`CBKBv��[�ebwKe�#����C���>"��r�,כ[V;���B�;аaFZ��3�$�UF�Z���W`ȿ�ȴ���}�I�Lj���͍qx�zE�A�[�=c��mY?�{z��Vu���ܱ�C�C���;E]3�����.*x{0g(!H+C03��TF%eG�#��9���
X�ya]�XM�c^*z�����0s�{g,��$L��;�����|���+%������7[��Soy���A6b�0�=\k��,��?�BQ�Oat��͍�7Y�l��f�Ej�V-Rs��$+(�늠�^�seWq��(q��Hr��2�n�9�7mQ��7��GX�a؈� �U�s��2�(��U�T�/]M����p�&YY�fZ[+#��������&D197�:.y*����F�*���y~k�V�+v>�[2�������Eѿf����ml�Xܿ�Aq�;V�J����@(����&b�� qp�5�
p_W;����������3q:�s�OĻg9q�J�x���.@�[a�I�	W���x����v��H���\�-���O���ϫ�M)�'         c  x��н��@����+��EAP�� _N�qYP��2o�"]��i��}��I��u2w29���������jS�B�̈>���z$pt���uvc}J�-psC r��������ja*���|���Փ����K���V��_3nЭ��B| Q���oY�=%H�a�47d��2.��86(E!9���ˢ����pq�\eh�L��(	%�G��dA�̐�F���N�{/CU�7U��Nˁ*�Udn�f�k��i����2�;y�R0��*'c1����#�">�^�$z��T�t�_Sޝ�6V
���k�&֫��@�q-��5~(���,c]O��0&�������nu�}Ev�n����i��=(^��;Y1-n��eB��Y��ci���t�P޲�6:����'o��v��4�R�k��2:�V<�{,�r�S,�MT�Bc�'�v2��{k�%na� ����K��e��rZ���+(wRsj�Frd�U��!��ev���-_��F`����a�xd��U3?�������|$�$X]��FIR��F���L�R��$�Z�N}�5�\��|�[��JH:���xL7���z� ;�,�     