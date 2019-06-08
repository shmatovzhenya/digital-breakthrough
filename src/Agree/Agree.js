import React from 'react';
import { Link } from 'react-router-dom';


const Agree = () => {
  return (
    <section>
      <h1>Согласие на обработку персональных данных</h1>
      <aside>
        Когда мир стал старым и способность  удивляться  покинула  людей, когда
        серые города  устремились в  дымное небо мрачными уродливыми башнями, в чьей
        тени никому и в голову не  приходило мечтать  о солнце или цветущем по весне
        луге,  когда просвещение  сорвало с  Земли ее  прекрасное  покрывало и поэты
        стали петь  лишь об изломанных фантомах с  мутными,  глядящими  внутрь  себя
        глазами, когда это наступило и детские мечть ушли навсегда, нашелся человек,
        который отправился в запредельные сферы искать покинувшие землю мечты.
            Об имени и доме этого человека писали мало, потому что они принадлежали
        едва просыпавшемуся миру, однако  и о том, и с другом  писали нечто неясное.
        Нам же достаточно знать, что он жил в городе, обнесенном высокой стеной, где
        царили вечные cyмерки, что он трудился весь день от зари и до зари и вечером
        приходил в  свою комнату, где окно  выходило  не на поля и рощи, а  во двор,
        куда в тупом отчаянии смотрели другие окна. С  дна  этого колодца видны были
        только стены  и окна, разве чт иногда, если  почти  вылезти из  окна наружу,
        можно было увиде проплывавшие мимо крошечные звезды.
            А так как стены  и  окна рано или поздно  могут  свести с ума человека,
        который  много читает  и много мечтает, то  обитатель  этой  комнаты  привык
        каждую ночь высовываться из окна, чтобы хоть  краем  глаза увидеть нечто, не
        принадлежащее земному миру с его серыми многоэтажными городами.
            Через  много  лет  он начал давать  имена медленно  плывущим  звездам и
        провожать их любопытным взглядом, когда  они, увы, скользили прочь, пока его
        глазам не открылось много такого, о  чем обыкновенные люди и не подозревают.
        И  вот однажды ночью, одолев  почти бездонную  пропасть, вожделенные  небеса
        спустились  к окну  этого человека  и, смешавшись с  воздухом  его  комнаты,
        сделали его частью их сказочных чудес.
            В его комнату явились непокорные потоки  фиолетовой полночи, сверкающие
        золотыми крупицами, вихрем ворвались клубы пыли и  огня из запредельных сфер
        с таким запахом, какого не бывает на земле. Наркотические океаны шумели там,
        зажженные солнцами, о которых люди  не имеют ни  малейшего понятия, и  в  их
        немыслимых глубинах плавали невиданные дельфины и морские нимфы. Бесшумная и
        беспредельная стихия  объяла  мечтателя и  унесла его,  не прикасаясь  к его
        телу,  неподвижно  висевшему на  одиноком подоконнике, а  потом много  дней,
        которых  не сосчитать  земным календарям, потоки  из запредельных сфер нежно
        несли  его к его  мечтам, к тем самым мечтам, о  которых человечество  давно
        забыло. Никому не  ведомо, сколько временных циклов они -позволили ему спать
        на  зеленом,  прогретом  солнышком   берегу,  овеянном  ароматом  лотосов  и
        украшенном их алыми звездами...
      </aside>
      <label>
        <span>Я согласен на обработку персональных данных</span>
        <input type="checkbox" />
      </label>
      <Link to="/joblist">
        Показать ближайших работодателей
      </Link>
    </section>
  );
};

export default Agree;
