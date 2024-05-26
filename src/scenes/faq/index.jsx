import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Бидний тухай" subtitle="Бидний тухай" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Чанарын хяналтын хэлтэс/бүтэц/
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          “Эрдэнэт үйлдвэр”ТӨҮГ- ийн Химийн төв лаборатори нь 1978 оны 06-р сарын 01-нд Монгол-Оросын хамтарсан уул уурхайн баяжуулах Эрдэнэт үйлдвэрийн Ерөнхий захирлын 296-р тоот тушаалаар үйлдвэрийн газрын шат дамжлага, технологийн процессын горимын хяналт, экспортод ачигдах зэс-молибдений баяжмалын чанарыг хянах үйл ажиллагааг химийн шинжилгээгээр хангах зорилгоор байгуулагдсан.
1977-2000 онуудад Химийн төв лабораторит Металын лаборатори, Тулш, усны    лаборатори, Шатах тослох материалын лабораториудыг нэгтгэж, Химийн шинжилгээний төвийг байгуулан Ерөнхий захирлын шууд удирдлагад үйл ажиллагаа явуулж байгаад Ерөнхий захирлын 2002 оны 04 сарын 30-ны өдрийн 170 тоот тушаалаар Химийн шинжилгээний төв, Техник хяналтын товчоо, Хэмжилзүйн албадыг нэгтгэж Чанарын хяналтын хэлтэс харьяалуулан зохион байгуулсан. 
2007 оны 8 сарын 07-ны өдрийн 122 тоот тушаалаар Химийн шинжилгээний албыг задалж, лабораториудыг хэлтсийн шууд харьяалалд үйл ажиллагаа явуулахаар зохион байгуулсан.   
Химийн төв лаборатори нь 41 хүний бүрэлдэхүүнтнэй 24 цагаар тасралтгүй үйл ажиллагаа явуулдаг. 
•	Лабораторийн эрхлэгч -1
•	Чанарын инженер -2
•	Химич инженер -3
•	Физик-Химич инженер -1
•	Микробиологич инженер -1
•	Лаборант шинжээч -30
•	Засвар үйлчилгээний ажилтан -3 тус тус ажиллаж байна.
Химийн төв лабораторит шинжилгээнд орохоор ирсэн дээжүүдийг 5 хэсэг рүү ангилан явуулдаг. Үүнд:
•	Технологийн хэсэг
•	Технологийн бус хэсэг
•	Физик химийн шинжилгээний хэсэг
•	Уусмал бэлтгэх хэсэг
•	Микробиологийн хэсэг

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Лабораторийн ажлын цар хүрээ болон технологи
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Химийн төв лаборатори нь эрдэс түүхий эд, зэсийн баяжмал, молибдений баяжмал, зэс-молибдений үйлдвэрлэлийн хаягдал, технологийн бүтээгдэхүүн (төрөл бүрийн давс, хаг, хусам, шохой, шохойн чулуу, хайлуур жонш, электролит уусмал), ус, хөрс, хүнсний бүтээгдэхүүн, технологийн болон лабораторийн химийн бодис урвалжийн химийн шинжилгээ, орчны болон хүнсний бүтэгдэхүүний химийн ба нян судлалын шинжилгээг нойтон химийн арбитраж болон багажит шинжилгээний 180 орчим батлагдсан арга аргачлалаар хийж гүйцэтгэж, үелэх системийн 40 гаруй элемент нэгдлийг өндөр нарийвчлалтайгаар, чанарын өндөр түвшинд тодорхойлдог.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Стандарт загвар дээжүүд
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Канад улсын Natural resources Canada хүрээлэнгийн 2 төрөл, Англи улсын BASRID хүрээлэнгийн 5 төрөл, Австрали улсын OREAS фирмийн 11 төрөл,Австрали улсын GEOSTAT фирмийн 1 төрөл, АНУ-ын NIST хүрээлэнгийн 2 төрөл, Монгол улсын Геологийн төв лабораторийн 13 төрөлийн стандарт загвар дээжүүд, АНУ-ын Perkin Elmer фирм, ХБНГУ-ын Carlroth фирмийн 43 нэр төрлийн стандарт уусмалуудыг сорилт, шинжилгээний ажилд хэрэглэдэг.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Шинжилгээний хариу гаргах стандарт
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
	 	


          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
