"use client"

const lorem = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis eaque velit accusamus deserunt quos atque esse rem enim reprehenderit soluta laboriosam sequi asperiores odit quisquam suscipit ipsam itaque quas eos, aliquam incidunt. Mollitia, magnam voluptates, odio commodi sed eligendi illo sunt rem, deleniti harum rerum quae enim voluptatem. Eius quo ipsum esse earum accusamus mollitia blanditiis obcaecati doloribus, distinctio alias deleniti! Quos atque libero, odit ad quibusdam repudiandae alias velit mollitia, iusto dicta consectetur excepturi quidem in pariatur aliquid porro rerum nam, autem incidunt. Odit atque eligendi necessitatibus dignissimos dicta sapiente, voluptatem blanditiis unde inventore in, exercitationem error. Illo labore eveniet facilis corrupti dicta soluta necessitatibus minima ad repellendus, quaerat dolorem voluptates eaque ullam consequatur nobis at, quasi veritatis fugit nam voluptate aspernatur sit doloremque beatae totam? Ratione, totam autem? Iusto repellat sit molestiae hic expedita eum, omnis perspiciatis veritatis temporibus distinctio tenetur voluptatem? Cum, voluptates. Mollitia maxime magni natus consequuntur dolorum neque adipisci voluptatibus dicta animi illo distinctio commodi porro voluptates ipsam amet, corporis beatae odio sunt eligendi pariatur vitae officia! Ipsa, obcaecati reiciendis, deserunt possimus fugiat nemo incidunt, modi sapiente eligendi provident veniam. Labore aliquid pariatur unde maiores dolore explicabo architecto accusamus saepe debitis ea totam nesciunt ut ab quod nostrum incidunt aspernatur repellat aliquam, perspiciatis accusantium optio nobis doloremque earum officiis? Eius suscipit provident ad recusandae, inventore pariatur dicta. Expedita asperiores alias facilis minima fugiat hic? Voluptate repellat inventore tenetur, fuga dolores iure corporis facilis culpa explicabo assumenda possimus repudiandae accusamus rem nisi officia odio non dolorem? Nam maxime magnam tempore culpa, eum inventore voluptatem quod aliquid fugit voluptates sunt deserunt rem repellendus, corrupti adipisci modi temporibus porro odit. Nemo expedita ex fugit illum, dolor delectus, animi excepturi nihil totam rerum, eius iure voluptates tempora? Voluptatum voluptatem recusandae, expedita ullam delectus autem illo provident unde amet eius soluta, similique laborum veniam repellendus dignissimos in maiores iste odit voluptas fugit, sunt cumque sint aperiam! Molestiae reiciendis ducimus, optio natus quis exercitationem in enim laudantium consequuntur vel repudiandae perferendis aliquam voluptas ipsam. Blanditiis maiores eius veritatis illo esse, placeat repellat quaerat dicta tempora accusamus illum distinctio voluptatibus dolores id adipisci totam iste eligendi velit veniam itaque. Soluta nisi natus ut, excepturi iusto numquam perferendis sed, eius quos repellat laudantium nam fugit hic eum asperiores deserunt ipsa. Mollitia asperiores minus eaque atque veritatis cumque rem laborum ex nulla magnam. Nostrum natus temporibus doloribus iusto consectetur illo nam, cum soluta corporis reprehenderit sapiente modi optio molestias, debitis fugiat hic saepe eius id perferendis dicta earum enim? Laboriosam recusandae aspernatur magnam neque error, quibusdam quo reiciendis minima harum exercitationem consequatur, perspiciatis ut sed expedita cupiditate? Expedita itaque fuga ullam rerum magnam reprehenderit neque laudantium laborum et enim repellat dignissimos veniam distinctio esse ipsam maxime hic, provident velit ipsum? Veritatis aut dolore, facere quo fugit, nihil ipsam possimus suscipit, nam ea deserunt maiores. Ipsa pariatur, voluptates nulla eligendi accusamus sint. Repellendus repellat, optio culpa harum sit reiciendis eius libero amet magni ipsum id doloribus molestiae et, pariatur eligendi? Tempore ipsam, magni quia rerum, ex officiis unde maiores illo iusto dolore asperiores amet facere aperiam dicta earum quibusdam itaque minima dignissimos neque. Velit soluta exercitationem, provident enim quae aspernatur doloribus quas voluptatum inventore! Quaerat ducimus, odit magnam nemo facere eveniet nesciunt, qui enim laboriosam dolorem repellendus voluptatibus impedit! Quas unde neque harum minima laboriosam commodi tempore nostrum modi totam, animi vero itaque quibusdam temporibus obcaecati ut quam dicta nobis, labore impedit ratione veritatis quaerat et? Sed laborum sequi ex unde, in velit quo odit reiciendis deleniti consequatur dolore iste totam aliquid facere temporibus perspiciatis voluptates officia excepturi accusamus dicta, ut cupiditate error? Quibusdam.
`

const BookViewer = ({ bookId }: { bookId: number }) => {


    return <div className="bg-[black]/90 justify-center flex items-center h-screen w-full absolute inset-0">

        {/* container */}
        <article className="bg-dark2 flex justify-center gap-4 max-w-max mx-auto rounded-md borderCard p-8">


            {/* PDFViewer */}
            <div className="bg-[#CAC8B9] flex-1 rounded-sm max-w-[800px] h-[660px] overflow-hidden">
                <h1 className="text-dark1 overflow-y-scroll max-h-screen">{lorem}</h1>
            </div>

            {/* controls */}
            <div className="flex flex-col gap-8">

                {/* zoom */}
                <div className="flex flex-col items-center gap-3">
                    <div className="px-2 py-1 bg-dark3 borderCard rounded-sm">
                        <p className="font-semibold">1.0</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hover:bg-borders w-[48px] h-[48px] bg-dark3 borderCard rounded-full text-24 font-bold">{"-"}</button>
                        <button className="hover:bg-borders w-[48px] h-[48px] bg-dark3 borderCard rounded-full text-24 font-bold">{"+"}</button>
                    </div>
                </div>

                {/* page */}
                <div className="flex flex-col items-center gap-3">
                    <div className="px-2 py-1 bg-dark3 borderCard rounded-sm">
                        <p>
                            <span className="font-semibold text-20">3</span>
                            /180</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hover:bg-borders w-[48px] h-[48px] bg-dark3 borderCard rounded-full font-bold text-20">{"<-"}</button>
                        <button className="hover:bg-borders w-[48px] h-[48px] bg-dark3 borderCard rounded-full font-bold text-20">{"->"}</button>
                    </div>
                </div>

            </div>


        </article>
    </div>
}

export default BookViewer