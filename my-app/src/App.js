import React, {useEffect, useState} from 'react';
import './index.css';
import Progress from "./components/Progress";



function App() {
    const[scroll, setScroll] = useState(0);

    useEffect(() => {
        const progress = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${ (totalScroll / windowHeight) * 100}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progress);

        return () => window.addEventListener("scroll", progress);
    })


    return (
        <div className="App">
            <Progress percentage={+scroll} />
            <div className="mt-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta ea explicabo iste magnam maxime
                    odio quos sequi voluptas! Commodi, deleniti dicta eligendi enim esse fugiat itaque iusto laborum
                    libero magnam obcaecati officia repellat repellendus rerum sequi, similique temporibus ut voluptas.
                    Accusamus adipisci amet aspernatur assumenda aut blanditiis, consequuntur delectus dolore dolorem et
                    eveniet illo laborum laudantium maiores minus molestiae mollitia nesciunt nisi numquam porro quaerat
                    quidem reiciendis, rem sequi similique temporibus tenetur unde velit vero voluptatem. Animi autem
                    cum repellendus sunt! Accusamus aspernatur aut dolor dolore dolores eius est eveniet exercitationem
                    iusto molestias nesciunt, nihil obcaecati perspiciatis porro quas repellendus reprehenderit sed unde
                    voluptate voluptatem! Consequatur ea ex explicabo fugit iusto, laudantium quod repudiandae sapiente
                    similique temporibus? Doloremque maiores mollitia nostrum quidem soluta. At autem culpa esse ex
                    molestias quia, ratione. Accusantium blanditiis deleniti dignissimos ea eaque esse facilis illum
                    modi nisi, odio quaerat qui rem repellendus repudiandae vero.</p>
                <p>Consequuntur eos porro reprehenderit sapiente ut. Accusantium asperiores autem cum delectus, dolore
                    harum iste laboriosam nobis officia perspiciatis porro rerum sint, ullam vero vitae? Asperiores
                    error fuga ipsum nisi officia? Amet deleniti dignissimos expedita nam necessitatibus officiis
                    provident quidem ullam! Alias enim id rem repellendus vel! Aliquam animi consectetur debitis nihil
                    odio repellendus, vel voluptatibus? Adipisci alias aspernatur beatae consequuntur corporis
                    distinctio dolore est harum hic ipsam laboriosam laborum natus necessitatibus nemo optio praesentium
                    rerum sit, soluta sunt suscipit vel veritatis voluptas, voluptatum. Aperiam consectetur delectus
                    dolorum ea eum facilis fuga inventore necessitatibus nobis, odit perspiciatis placeat quae, quasi
                    qui quod repellat sapiente unde voluptatem, voluptatibus voluptatum. Architecto consequuntur,
                    cupiditate dolorum ea hic impedit minus nam natus nisi odio optio quas quos reprehenderit
                    repudiandae similique sit suscipit, voluptatem? Dolorem excepturi illo incidunt obcaecati quisquam
                    sapiente? Alias aspernatur dicta dignissimos dolore esse, officia perferendis perspiciatis quibusdam
                    repellat, saepe tempore ut voluptate!</p>
                <p>In, optio reiciendis. Accusamus dolor eos eum explicabo fugit ipsa minima molestias, nisi obcaecati
                    quas qui quis sunt tempore totam ut veniam voluptatem. Accusamus ad animi consequatur corporis culpa
                    dolore doloribus excepturi exercitationem facilis fuga incidunt itaque laudantium natus
                    necessitatibus nihil, numquam odit officia placeat quaerat quasi reiciendis reprehenderit, similique
                    sunt tempora tenetur ullam voluptatibus voluptatum! Alias amet architecto corporis dolor, esse,
                    excepturi labore maxime nobis nostrum numquam sit unde vel vero! Deserunt dignissimos earum illo
                    illum necessitatibus nemo praesentium quidem tempora! Asperiores consequatur culpa, deserunt facilis
                    id in laudantium nemo, odit perspiciatis quia quis sapiente totam vel veritatis voluptatem?
                    Architecto blanditiis distinctio molestias nihil nostrum quaerat quam rerum sed suscipit
                    voluptatibus. Excepturi explicabo id laborum molestias, qui vitae voluptatum. A accusamus adipisci,
                    aperiam asperiores, consectetur dolor, doloribus exercitationem minima mollitia neque obcaecati
                    officiis perspiciatis reiciendis repudiandae tempore vitae voluptates voluptatibus? Aut doloribus
                    eum expedita modi odit quasi ut veniam!</p>
                <p>Accusamus accusantium ad alias at consequuntur corporis culpa cumque delectus deleniti deserunt dicta
                    doloribus earum enim expedita fugit id illum, impedit inventore ipsa ipsam laborum modi mollitia
                    officia omnis optio perferendis porro possimus provident qui ratione sapiente sequi similique sit
                    tempora ut voluptas voluptates. Accusamus alias aliquam asperiores at beatae commodi dicta eaque
                    eius eos error exercitationem hic ipsum iure iusto natus, necessitatibus nulla numquam provident
                    quam qui repellendus repudiandae saepe sequi tempora temporibus. Architecto assumenda dolores eaque
                    iusto laborum obcaecati officiis omnis possimus provident quae reprehenderit, sint totam ullam? At
                    consectetur cumque eos error esse illum in non pariatur. Accusantium aspernatur aut consequuntur
                    dicta dignissimos dolorem ea eaque earum, eius eligendi et expedita fuga id in iste laudantium
                    libero molestias nisi nostrum nulla obcaecati odio officiis perspiciatis quae reiciendis repellat
                    reprehenderit tempora unde vitae voluptatem? Adipisci, at dignissimos ex, illum impedit incidunt
                    ipsam nemo numquam optio provident unde velit.</p>
                <p>Accusantium commodi consectetur consequatur culpa dolore dolores eligendi ipsam laborum laudantium
                    libero officiis quas, ratione rem, repellendus ullam vel voluptate? Ab adipisci animi asperiores
                    assumenda doloribus exercitationem explicabo harum iste itaque iure laboriosam minima nulla
                    perspiciatis porro quas qui quibusdam quis quo sint sunt unde ut, voluptatibus? Beatae distinctio
                    excepturi nam ullam. A accusantium adipisci asperiores, atque cumque distinctio dolor earum ex,
                    facilis fugit illo illum ipsam ipsum iure nobis, obcaecati officia quisquam recusandae sequi totam
                    ullam veritatis voluptate! Animi asperiores autem deleniti dolores, facilis illum incidunt ipsum
                    modi necessitatibus nulla placeat quibusdam quod quos suscipit ullam vero voluptas. Alias autem
                    culpa error facilis fuga laudantium obcaecati officia. Aut blanditiis explicabo placeat quasi?
                    Debitis dolor dolore dolorem doloremque, dolorum ea eos fugiat in itaque libero nesciunt nobis quia,
                    rem, repudiandae suscipit temporibus veritatis voluptates. Ad eos harum labore, laborum nulla quas
                    quod ratione? Dignissimos distinctio eveniet fugiat perspiciatis provident saepe?</p>
                <p>Error ex libero placeat quo sapiente. Aperiam aut autem eaque earum est ipsum maiores? A, ad
                    aspernatur assumenda commodi corporis culpa deserunt distinctio dolore eius enim error
                    exercitationem harum illo labore, laudantium magni mollitia neque nostrum, officia omnis optio
                    perferendis possimus quos saepe suscipit ullam ut velit. Accusamus, amet consequuntur, dolorum
                    facere hic in ipsum iste labore, magni nemo nesciunt odit sapiente suscipit voluptas voluptates!
                    Aspernatur, commodi cum dolor dolores ea eaque eos eveniet, natus nihil officia perferendis, sequi
                    sit tempore! Asperiores commodi distinctio fuga impedit ipsa pariatur quos sequi sit sunt,
                    voluptatibus. Accusantium at autem commodi doloremque, et ex, laboriosam magnam magni, mollitia
                    reiciendis saepe voluptatem? Assumenda cum et explicabo fugit inventore ipsam maiores molestiae
                    mollitia natus necessitatibus neque possimus recusandae reiciendis sint tempore unde, veritatis
                    voluptas voluptates. Consequatur et laborum libero nobis pariatur quaerat recusandae? Adipisci aut
                    consequuntur, corporis ex nulla quas temporibus voluptatum! Consequatur laborum obcaecati
                    provident!</p>
                <p>A asperiores aspernatur at ipsum iure quia voluptates? Aperiam maxime nam perferendis quasi qui,
                    ratione sit vero. Aliquam consequuntur culpa delectus dolor doloremque dolores doloribus dolorum
                    eius eum expedita facilis fuga incidunt maiores nemo, nisi odit officia perspiciatis quaerat quidem
                    quo soluta voluptates voluptatibus. Deserunt esse molestiae nihil non veritatis? Maiores, maxime,
                    pariatur! Doloribus eius eveniet impedit natus perferendis repellendus saepe veniam voluptate! Ab
                    amet aspernatur at consectetur dolores earum enim eos eum eveniet, fuga fugiat id labore laborum
                    minima molestias mollitia neque qui ratione, repudiandae rerum sapiente sequi sunt, tempora tenetur
                    totam. Aliquam assumenda debitis eaque eos, error impedit ipsa pariatur, perferendis quaerat
                    quibusdam velit voluptate? Ad aperiam at, cum debitis delectus deleniti dolore, eligendi inventore
                    libero molestias nihil non nostrum quia reprehenderit tempore ullam voluptatibus. A, aliquid at
                    dolor doloremque eum laboriosam magni neque, optio temporibus, totam ut voluptatum! Aliquam harum
                    nesciunt nisi quae quisquam vel voluptas voluptatem?</p>
            </div>
        </div>
    );
}

export default App;
