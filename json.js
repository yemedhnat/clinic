let body_parts = [
  'ሆዴን',
  'መቀመጫየን',
  'ጡቴን',
  'ህብለሰረሰረ',  
  'ልቤን',
  'ጀሮየን',
  'አይኔን',
  'ፊቴን',
  'ጥቅላላ ሰውነቴን',
  'ብልቴን',
  'የጸጉር እና የጥፍር ችግር',
  'እግር እና እጄን',
  'ጉሮሮ እና አንገቴን',
  'አፍንጫዬን',
  ' አፌን',
  'ዳሌ',
  ' የወር አበባ ችግር',
  'የቆዳ ችግር',
  'የሽንት ቧንቧ ችግር'
]

let all_symptoms = [['Abdominal swelling', 'Acute abdominal pain in adults', 'Acute abdominal pain in pregnancy', 'Chronic/recurrent abdominal pain in adults', 'Constipation', 'Diarrhoea', 'Epigastric pain', 'Recurrent childhood abdominal pain', 'Vomiting', 'Vomiting blood'],
 ['Anal itching', 'Anal swelling', 'Anorectal pain', 'Rectal bleeding', 'Rectal discharge'], 
 ['Breast enlargement in men', 'Breast lumps in women', 'Breast pain', 'Nipple discharge'],
  ['Acute confusion', 'Dizziness', 'Hallucinations', 'Headache', 'Insomnia', 'Loss of libido', 'Memory loss', 'Vertigo'],
   ['Acute shortness of breath', 'Chest pain', 'Chronic shortness of breath', 'Cough in adults', 'Cough in children', 'Coughing up blood', 'Palpitations'], 
  ['Deafness', 'Earache', 'Ear discharge', 'Tinnitus'], 
  ['Acutely red and painful eye', 'Double vision', 'Eyelid problems', 'Flashes, fl oaters and transient visual disturbance', 'Gradual loss of vision', 'Itchy or irritating eyes or eyelids', 'Sudden loss of vision'],
  ['Facial pain', 'Facial rash', 'Facial swelling', 'Facial ulcers and blisters'],
['Abnormal gait in adults','Abnormal movements','Back pain','Crying baby','Delayed puberty','Episodic loss of consciousness','Excessive sweating','Failure to thrive','Falls with no loss of consciousness','The febrile child','Feeling tense and anxious','Flushing','Infertility','Itching','Jaundice in adults','Limp in a child','Numbness and paraesthesiae','Prolonged fever','Swollen glands','Thirst or dry mouth','Tiredness','Tremor','Weight gain','Weight loss'],
    
    ['Erectile dysfunction', 'Haemospermia', 'Painful intercourse', 'Penile pain', 'Penile ulceration/sores', 'Scrotal swelling', 'Testicular pain', 'Vaginal discharge', 'Vulval irritation', 'Vulval swelling', 'Vulval ulceration/sores'],
    ['Abnormal nails','Excess body hair','Hair loss','Itchy scalp'],
    ['Acute single joint pain', 'Arm and shoulder pain', 'Calf pain', 'Foot pain', 'Hand and wrist pain', 'Leg ulcers', 'Multiple joint pain', 'Painful muscles', 'Recurrent hip area pain in an adult', 'Recurrent knee pain', 'Swollen ankles', 'Swollen calf'], 
    ['Difficulty swallowing', 'Hoarseness', 'Neck lumps', 'Sore throat', 'Stiff neck', 'Stridor in children'], 
    ['Blocked nose', 'Nosebleed', 'Runny/discharging nose'],  
    ['Bad breath', 'Bleeding or painful gums', 'Mouth lumps and marks', 'Mouth ulcers', 'Painful tongue'],
     ['Acute pelvic pain', 'Chronic pelvic pain', 'Groin swellings'], 
    ['Absent periods', 'Heavy periods', 'Irregular vaginal bleeding', 'Painful periods'],
     ['Blisters (vesicles and bullae)', 'Erythema', 'Macules', 'Nodules', 'Papules', 'Purpura and petechiae', 'Pustules', 'Scales and plaques'], 
    ['Blood in urine', 'Excessive urination', 'Frequency', 'Incontinence', 'Nocturia', 'Retention']
  ]

let all_diagnosis = [['pregnancy', 'irritable bowel syndrome (IBS)', 'constipation', 'fibroid uterus', 'enlarged bladder'],
 ['peptic ulcer', 'biliary colic', 'appendicitis', 'gastroenteritis', 'renal colic'],
  ['symphysis pubis and ligament strain', 'miscarriage: 20_40% of pregnancies in first trimester', 'labour: 6% premature', 'placental abruption: 1/80_200 pregnancies', 'pyelonephritis (especially around 20 weeks)'],
   ['IBS', 'recurrent UTI', 'chronic peptic ulcer (PU)', 'constipation', 'diverticular disease'],
    ['diet and lifestyle (inadequate fibre and ignoring the urge to defecate)', 'inactivity (especially in the elderly)', 'irritable bowel syndrome (IBS)', 'painful perianal conditions: fissure, haemorrhoids, abscess, fl orid warts', 'drugs, e.g. opiates, iron, aluminium hydroxide'], 
    ['acute infective gastroenteritis, e.g. rotavirus, campylobacter, food poisoning', 'antibiotics (and other drug side eff ects)', 'irritable bowel syndrome (IBS)', 'diverticulitis', 'overfl ow constipation (especially in the elderly)'],
     ['non ulcer dyspepsia (NUD)', 'gastro_oesophageal refl ux disease (GORD)/gastritis', 'IBS', 'gallstones', 'duodenal ulcer/duodenitis'],
     ['recurrent viral illnesses', 'anxiety and depression (sometimes known as periodic syndrome or abdominal migraine)', 'recurrent UTI', 'constipation', 'gastritis and GORD'],
      ['gastroenteritis', 'acute viral labyrinthitis (and some other causes of acute vertigo)', 'upper respiratory tract infection (URTI) (in children, especially with marked coughing)', 'pregnancy', 'appendicitis and other causes of the acute abdomen'],
       ['peptic ulcer (PU)/acute gastritis', 'Mallory_Weiss (M_W) tear', 'oesophageal varices (cirrhosis, usually alcoholic)', 'malignancy: oesophagus or stomach', 'GORD'], 
       
       ['fungal infection _ tinea, thrush', 'threadworms', 'haemorrhoids', 'perianal skin tags', 'anal fissure'],
        ['prolapsed pile', 'perianal haematoma', 'skin tags', 'perianal abscess', 'rectal prolapse'],
        ['anal fissure', 'thrombosed haemorrhoids/perianal haematoma', 'perianal abscess', 'proctalgia fugax (PF)', 'anorectal malignancy'],
         ['haemorrhoids', 'anal fissure', 'gastroenteritis', 'rectal carcinoma', 'diverticular disease'], 
['haemorrhoids', 'anal fissure', 'rectal prolapse', 'proctitis', 'perianal warts'], 

['puberty', 'drugs (spironolactone, cimetidine, digoxin, cyproterone, finasteride, marijuana)', 'chronic liver disease (especially alcohol)', 'lung carcinoma', 'hyperthyroidism'], 
['carcinoma', 'cyst', 'abscess', 'fibroadenoma', 'fibrous dysplasia'], 
['pregnancy', 'cyclical mastalgia', 'cracked or infl amed nipple', 'breast abscess', 'mastitis'],
 ['pregnancy', 'duct papilloma', 'duct ectasia', 'acute mastitis/breast abscess', 'areolar abscess (infected gland of Montgomery)'],
 
 ['hypoxia (respiratory and cardiac)', 'systemic infection', 'cerebrovascular accident (CVA: stroke and transient ischaemic attack (TIA))', 'hypoglycaemia', 'diabetic ketoacidosis (DKA)'],
  ['viral illness', 'anxiety (and hyperventilation)', 'hypoglycaemia', 'postural hypotension (e.g. elderly and pregnancy)', 'vertebrobasilar insufficiency (elderly with cervical osteoarthritis)'], 
  ['drugs (amphetamine, cocaine, LSD, ecstasy, solvents and tricyclic overdose) and drug', 'withdrawal', 'extreme fatigue', 'alcoholic hallucinosis (delirium tremens of acute alcohol withdrawal)', 'febrile delirium', 'schizophrenia'], 
  ['tension headache (underlying anxiety or depression)', 'frontal sinusitis', 'migraine', 'cervical spondylosis', 'eye strain'], 
['anxiety from excess psychological stress (work, relationships, finance)', 'clinical depression', 'chronic alcohol excess', 'poor sleep hygiene: hyperstimulation (e.g. caff eine, nicotine, drugs, exciting television films)', 'and daytime naps', 'pain of chronic physical illness (e.g. osteoarthritis)'],
 ['depression', 'relationship problems', 'perimenopause', 'excess alcohol intake (and cirrhosis in men)', 'ageing'],
  ['anxiety/stress', 'depressive illness', 'dementia (multi_infarct, Alzheimer’s disease and dementia with underlying cause, such as', 'tumour, neurosyphilis, hypothyroidism, vitamin B12 and folate deficiency)', 'trauma: head injury', 'CVA (infarct in posterior cerebral artery territory)'],
   
  ['benign positional vertigo', 'vestibular migraine', 'Ménière’s disease', 'vestibular neuritis', 'Eustachian tube (ET) dysfunction (causes mild vertigo)'],
    
  ['asthma', 'pneumonia', 'acute LVF', 'acute exacerbation of COPD', 'hyperventilation'],
     ['angina/MI', 'GORD', 'anxiety (Da Costa’s syndrome)', 'pulled muscle', 'Tietze’s syndrome (costochondritis)'],
      ['obesity/unfitness', 'COPD', 'anaemia', 'congestive cardiac failure (CCF)', 'asthma'],
       ['URTI', 'LRTI', 'asthma', 'COPD', 'ACE inhibitor side eff ect'],
 ['URTI', 'LRTI', 'post_nasal drip (e.g. post URTI, allergic rhinitis)', 'asthma', 'pertussis'], 
 ['chest infection', 'pulmonary embolism (PE)', 'bronchogenic carcinoma', 'pulmonary oedema', 'prolonged coughing'], 
 ['anxiety (increased awareness of normal heartbeat)', 'sinus tachycardia (e.g. stress, fever, exercise)', 'atrial ectopics', 'ventricular ectopics', 'supraventricular tachycardia (SVT)'], 
 ['earwax', 'otitis media (OM)', 'otitis externa (OE)', 'glue ear (serous otitis media)/Eustachian dysfunction', 'presbyacusis (senile deafness)'], 
 ['infective otitis media (OM): bacterial/viral', 'infective otitis externa (OE): bacterial/fungal/viral', 'boils and furuncles of the canal and pinna', 'trauma (especially cotton buds) and foreign bodies (including earwax)', 'throat problems: tonsillitis/pharyngitis/quinsy'], 
 ['boil', 'acute suppurative otitis media (OM)', 'infective otitis externa (OE): viral, bacterial and fungal', 'chronic suppurative otitis media', 'reactive otitis externa: seborrhoeic dermatitis, eczema, psoriasis'],
  ['earwax', 'hearing loss (20% of cases: chronic noise damage and presbyacusis)', 'suppurative otitis media (also chronic infection and serous OM)', 'otosclerosis', 'Ménière’s disease'], 
  ['acute conjunctivitis (allergic or infective)', 'acute iritis', 'acute glaucoma', 'keratitis/corneal ulcer', 'corneal abrasion or superficial foreign body (FB)'],
   ['physiological (focusing too near, or perceiving objects nearer than those focused on)', 'intoxication: prescribed sedation, non_prescribed drugs, especially excess alcohol, opiates,', 'benzodiazepines', 'stroke', 'mild head injury, causing temporary diplopia', 'facial bone trauma _ orbital and zygomatic fracture'],
    ['stye', 'blepharitis', 'meibomian cyst', 'xanthelasma', 'blocked tear duct'], 
  ['‘normal’ fl oaters', 'migraine', 'posterior vitreous detachment', 'amaurosis fugax', 'retinal detachment'], 
  ['cataract', 'chronic glaucoma', 'diabetic and hypertensive retinopathy', 'senile macular degeneration', 'gradual inferior retinal detachment'], 
  ['allergic conjunctivitis (usually hay fever)', 'infective conjunctivitis', 'dry eyes', 'blepharitis', 'blocked tear duct'], 
  ['acute glaucoma', 'vitreous haemorrhage', 'central retinal artery occlusion', 'migraine', 'CVA or TIA'], 
  ['maxillary/frontal sinusitis', 'trigeminal neuralgia (TN)', 'dental abscess', 'temporomandibular joint (TMJ) dysfunction', 'shingles (herpes zoster)'],
   ['acne', 'rosacea', 'seborrhoeic eczema', 'impetigo', 'perioral dermatitis'],
    ['mumps (viral parotitis)', 'angioneurotic oedema (allergy)', 'dental abscess', 'trauma (especially fractured zygoma)', 'salivary gland stone'],
    ['impetigo', 'herpes simplex virus (HSV)', 'herpes zoster', 'basal cell carcinoma (BCC)', 'keratoacanthoma'], 
    ['trauma (back and leg)', 'osteoarthritis (OA) or other painful joint problem', 'vestibular ataxia (vestibular neuritis, Ménière’s disease, CVA)', 'Parkinson’s disease', 'intermittent claudication (IC)'], 
  ['RLS', 'myokymia (aff ecting orbicularis oculi muscles)', 'drug induced _ including choreoathetosis, dystonias, tardive dyskinesias and akathisia', '(drugs include l_dopa, tricyclic antidepressants, metoclopramide and antipsychotics)', "Tourette’s", 'simple partial seizures'],
   ['mechanical (muscular) back pain', 'prolapsed lumbar disc: nerve root pain', 'spondylosis (exacerbation)', 'pyelonephritis and renal stones', 'pelvic infection'],
    ['normal', 'colic', 'constipation', 'teething', 'viral illness'],
   ['constitutional (50% of cases in boys, 16% of cases in girls)', 'hyperthyroidism', 'Turner’s syndrome', 'anorexia nervosa (1% of all girls in Western countries)', 'hypothalamic gonadotrophin_releasing hormone (GnRH) deficiency (e.g. Noonan’s and', 'Kallmann’s syndrome)'], 
   ['vasovagal attacks (faints)', 'paroxysmal arrhythmia, e.g. Stokes_Adams attacks, sinus bradycardia, SVT', 'epilepsy (various forms)', 'hypoglycaemia', 'orthostatic hypotension'], 
   ['menopause', 'anxiety', 'infections (common, acute)', 'hypoglycaemia: may be reactive, i.e. non_diabetic', 'hyperthyroidism'], 
   ['normal _ the genetic components of height and weight kick in during the first 2 years, so', 'babies of small parents may cross the centiles and appear to be ‘dropping off ’', 'neglect (emotional and physical)', 'feeding problems (inadequate or inappropriate feeding, physical causes, e.g. cleft palate)', 'vomiting from any cause (gastro_oesophageal refl ux common, other causes such as pyloric', 'stenosis rarer)', 'malabsorption _ including cow’s milk intolerance (lactose or cow’s milk protein', 'intolerance), coeliac disease'], 
   ['orthostatic hypotension', 'brainstem ischaemia (vertebrobasilar insufficiency)', 'iatrogenic (e.g. phenothiazines, hypoglycaemics, tricyclics and hypotensives)', 'postural instability (osteoarthritis, quadriceps weakness)', 'any acute illness (e.g. sepsis, CVA)'],
    ['non_specific viral URTI, e.g. colds, fl u_type illness, pharyngitis, tracheitis', 'gastroenteritis', 'otitis media', 'tonsillitis', 'chest infection'], 
   ['life events (may be underlying ‘anxious personality’)', 'pre_menstrual tension', 'generalised anxiety disorder', 'panic disorder', 'depression'], 
   ['menopause', 'chronic alcohol misuse', 'rosacea', 'iatrogenic (e.g. calcium antagonists)', 'anxiety'], 
   ['unexplained (27%)', 'defective sperm (24% _ may be various underlying causes)', 'anovulatory cycles/defective ovulation (21%)', 'fallopian tube blockage (14%)', 'endometriosis (6%)'], 
   ['contact allergy (contact dermatitis)', 'scabies (and other pediculoses)', 'atopic eczema', 'pityriasis rosea', 'psoriasis'],
    ['gallstones in common bile duct', 'viral hepatitis (e.g. glandular fever, hepatitis A, B, C)', 'carcinoma of head of pancreas', 'hepatic carcinoma (usually metastases)', 'alcoholic cirrhosis'],
     ['trauma, including foreign body in foot (especially toddlers)', 'irritable hip (transient synovitis)', 'acute viral infection with arthralgia', 'pauciarticular juvenile chronic arthritis ( JCA: 1 in 1000)', 'slipped femoral epiphysis (usually over 10 years old)'],
      ['anxiety with hyperventilation', 'carpal tunnel (CT) syndrome', 'sciatica', 'diabetic neuropathy', 'cervical spondylosis'],
       ['glandular fever (GF)', 'abscess (anywhere)', 'chronic pyelonephritis (recurrent UTI)', 'carcinoma (especially bronchial)', 'rheumatoid arthritis (RA)'],
        ['local infection (e.g. URTI, tonsillitis)', 'generalised viral infection (e.g. glandular fever, rubella)', 'malignancy: secondary metastasis', 'white cell malignancy: lymphoma, leukaemia, myeloma', 'septicaemia'],
      ['diabetes mellitus', 'dehydration', 'medication (e.g. tricyclic antidepressants, antihistamines)', 'mouth breathing (usually through nasal blockage)', 'anxiety'],
       ['true depressive illness', 'stress (overwork, young children, boredom, etc.)', 'anaemia', 'acute post_viral fatigue', 'hypothyroidism'],
        ['anxiety', 'thyrotoxicosis', 'drug withdrawal (e.g. opiates, benzodiazepines, alcohol)', 'benign essential tremor (familial)', 'Parkinson’s disease'],
    ['simple obesity (usually hereditary component with poor diet and lack of exercise)', 'hypothyroidism', 'pregnancy', 'oedema of any cause (e.g. cardiac failure, renal failure, hepatic failure)', 'alcohol excess'], 
    ['‘normal’ stressful life events without psychiatric illness (e.g. changing job, divorce,', 'redundancy, bereavement, exam pressure)', 'clinical depressive illness', 'eating disorders: anorexia nervosa and bulimia nervosa', 'hyperthyroidism: thyrotoxicosis and iatrogenic (excess thyroid replacement)', 'malignancy anywhere'], 
    ['depression/anxiety', 'excessive alcohol intake', 'relationship dysfunction', 'vascular: arterial insufficiency (arteriopathy) or excessive venous drainage', 'iatrogenic (e.g. prostatic cancer treatments, hypotensives, some antidepressants)'], 
    ['unknown (at least 50%; the majority are probably secondary to forgotten or unnoticed', 'trauma)', 'prostatitis', 'post_operative (prostate surgery, biopsy or extracorporeal shock wave lithotripsy)', 'genito_urinary infection (epididymo_orchitis, urethritis, UTI)', 'trauma (to testicles or perineum)'],
     ['pure vaginismus: psychogenic spasm and dryness', 'vulvovaginitis (especially infection, e.g. bacterial or fungal vaginosis, ulceration,', 'bartholinitis)', 'menopausal vaginal dryness (atrophic vaginitis)', 'endometriosis', 'pelvic infl ammatory disease (PID) and cervicitis'],
      ['balanitis (fungal, bacterial or allergic)', 'acute urethritis', 'phimosis (e.g. balanitis xerotica obliterans)', 'urinary calculus (at any point in ureter or urethra)', 'prostatitis/prostatic abscess'],
       ['herpes simplex virus (HSV)', 'boil/infected sebaceous cyst', 'balanitis: bacterial or fungal', 'trauma: zipper injury commonest; also torn frenulum, bites, self_mutilation', 'balanitis xerotica obliterans (BXO)'],
        ['inguinal hernia', 'sebaceous cyst', 'hydrocoele', 'epididymal cyst', 'epididymo_orchitis (EO)'],
         ['acute orchitis (mumps, and less commonly scarlet fever and fl u)', 'acute epididymo_orchitis (EO) (UTI and sexually transmitted infection)', 'torsion of the testis', 'epididymal cyst', 'referred from ureteric stone'], 
    ['excessive normal secretions', 'thrush', 'bacterial vaginosis (BV)', 'trichomonal vaginosis (TV)', 'cervicitis (gonococcus, Chlamydia, herpes)'], 
    ['thrush: Candida infection', 'Trichomonas vaginalis', 'chemical: bubble baths, detergents, ‘feminine hygiene’ douches', 'trauma: insufficient lubrication during intercourse', 'atrophic vaginitis'],
     ['boils', 'sebaceous cysts', 'viral warts (condylomata acuminata)', 'Bartholin’s cyst', 'inguinal hernia (may extend down to labium major)'],
      ['herpes simplex virus (HSV)', 'thrush (particularly if very excoriated)', 'vulval dysplasia', 'squamous cell carcinoma (SCC): 95% of vulval malignancies', 'excoriated scabies'],
       ['psoriasis', 'fungal infection: onychomycosis', 'trauma to nail bed', 'trauma due to biting (also hang nail)', 'onychogryphosis (OG)'],
        ['constitutional (physiological)', 'polycystic ovary syndrome (PCOS): 50% of cases', 'anorexia nervosa', 'menopause', 'iatrogenic, e.g. phenytoin, minoxidil, danazol, glucocorticoids'],
         ['androgenic alopecia (male pattern baldness)', 'seborrhoeic dermatitis', 'alopecia areata', 'contact allergic dermatitis', 'tinea capitis'],
     ['head lice', 'seborrhoeic eczema', 'psoriasis', 'lichen simplex', 'impetigo (may be underlying head lice or eczema)'], 
     ['osteoarthritis','traumatic synovitis','gout/pseudogout','chondromalacia patellae', 'traumatic haemarthrosis'],
     ['simple muscular strain','epicondylitis (tennis or golfer’s elbow)','subacromial bursitis/capsulitis','cervical spondylosis','angina'],
     ['idiopathic cramp', 'muscle stiffness', 'cellulitis','peripheral vascular disease','muscle injury'], 
['gout','verruca','bunion/hallux valgus','infected ingrowing toenail','plantar fasciitis' ],
['osteoarthritis','carpal tunnel syndrome','trauma','rheumatoid','tenosynovitis'],
['venous disease','peripheral arterial disease','diabetes','vasculitis', 'gross oedema ','chronic infection'],
['rheumatoid arthritis','psoriatic arthropathy','viral polyarthritis','connective tissue diseases','giant cell arteritis','multiple osteoarthritis'],
['overuse','acute viral illness','depression',  'polymyalgia rheumatica','side effects of statins'],
['muscular/ligamentous strain','osteoarthritis',  'trochanteric bursitis','referred from back','meralgia paraesthetica'],

['ligament sprain/minor soft tissue injury', 'osteoarthritis', 'cartilage injury', 'chondromalacia patellae/patellofemoral pain', 'Osgood_Schlatter’s disease'],

     ['congestive cardiac failure (CCF)', 'drug reaction', 'gravitational', 'obesity', 'pelvic mass'],
        ['cellulitis', 'most causes of swollen ankles (see p. 312)', 'muscle strain/rupture (especially rupture of plantaris tendon)', 'ruptured Baker’s cyst', 'DVT'],
         ['globus hystericus', 'any painful pharyngeal condition, e.g. pharyngitis', 'GORD', 'benign stricture', 'oesophageal carcinoma'],
          ['acute viral laryngitis', 'voice overuse (shouting, screaming)', 'hypothyroidism', 'smoking', 'sinusitis'],
           ['reactive lymphadenitis due to a local infection', 'prominent normal lymph nodes', 'goitre', 'sebaceous cyst', 'thyroglossal cyst'], 
           ['mild viral pharyngitis (with URTI)', 'tonsillitis/streptococcal pharyngitis (‘strep throat’)', 'glandular fever', 'quinsy (peritonsillar abscess)', 'oropharyngeal candidiasis'],
            ['acute torticollis (positional, draughts)', 'cervical spondylosis', 'viral URTI with cervical lymphadenitis', 'whiplash injury', 'meningism due to systemic infection (e.g. pneumonia)'], 
            ['viral croup (laryngotracheobronchitis)', 'acute epiglottitis', 'acute laryngitis', 'acute airways obstruction: foreign body (small toy, peanut)', 'laryngeal paralysis (congenital: accounts for 25% of infants with stridor)'],
             ['vasomotor rhinitis', 'allergic rhinitis (seasonal and perennial)', 'nasal polyps', 'adenoidal hypertrophy (in children)', 'nasal septal deviation (may aff ect 20% of adults)'],
              ['spontaneous (from Little’s area; may be aggravated by nose_picking and sneezing)', 'nasal infection and ulceration', 'drugs, e.g. anticoagulants', 'allergic rhinitis (and atrophic rhinitis)', 'hypertension (oft en with atherosclerosis)'],
       ['URTI including common cold', 'allergic rhinitis (seasonal or perennial)', 'vasomotor rhinitis', 'sinusitis', 'infected nasal mucosal lesion (herpes simplex, impetigo)'],
        ['poor dental hygiene', 'heavy smoking', 'gingivitis (including acute necrotising ulcerative gingivitis (ANUG), acute and chronic', 'gingivitis)', 'excess alcohol intake (acute and chronic)', 'discharging dental abscess'],
         ['gingivitis/periodontal (gum) disease', 'pregnancy gingivitis', 'acute necrotising ulcerative gingivitis (ANUG): Vincent’s stomatitis', 'trauma: poorly fitting dentures', 'drugs: warfarin overdosage, long_term phenytoin'],
          ['apical tooth abscess (gumboil)', 'aphthous ulceration', 'Fordyce spots (tiny white or yellow spots, on mucosa opposite molars and vermilion border', 'of lips; they are sebaceous glands)', 'oral candida infection', 'mucocoele (solitary cystic nodule inside lip)'], 
          ['trauma', 'recurrent aphthous ulceration (RAU)', 'acute necrotising ulcerative gingivitis (ANUG)', 'thrush', 'iron_deficiency anaemia (also vitamin B12 and folate deficiency)'], 
       ['geographic tongue (benign migratory glossitis) _ painful in some cases', 'candidal infection (e.g. post_antibiotic, steroids and uncontrolled diabetes)', 'trauma (bitten, burnt from hot food or drink)', 'anaemia: iron, vitamins B6 and B12, and folate deficiency', 'aphthous ulceration'], 
       ['acute pelvic infl ammatory disease (PID)', 'urinary tract infection (UTI)', 'miscarriage', 'ectopic pregnancy', 'ovarian cysts: torsion, rupture'],
        ['endometriosis', 'chronic pelvic infl ammatory disease', 'pelvic congestion', 'irritable bowel syndrome', 'physiological (mittelschmerz, primary dysmenorrhoea)'],
        ['sebaceous cyst', 'palpable lymph nodes (LNs) _ ‘normal’ or secondary to an infection', 'inguinal hernia', 'femoral hernia', 'saphena varix'], 
        ['pregnancy', 'physiological: rapid weight (10_15%) loss, and severe emotional stress', 'menopause (including premature ovarian failure)', 'polycystic ovary syndrome (PCOS)', 'drugs: phenothiazines, metoclopramide, valproate, cytotoxics'], 
        ['dysfunctional uterine bleeding (DUB)', 'cervical or endometrial polyps', 'endometriosis', 'fibroids', 'puberty and perimenopause'],
        ['dysfunctional uterine bleeding (DUB)', 'breakthrough bleeding (BTB) on contraceptive pills and long acting reversible', 'contraception; also HRT', 'cervical polyp or erosion', 'cervicitis and PID', 'post_menopausal atrophic vaginitis'], 
        ['primary dysmenorrhoea', 'endometriosis', 'chronic PID', 'IUCD', 'pelvic pain syndrome (‘venous congestion’)'],
         ['trauma: skin friction, burns (thermal and chemical), insect bites', 'herpes simplex', 'herpes zoster', 'childhood viruses: hand, foot and mouth disease, chickenpox', 'eczema (pompholyx and other acute eczemas)'],
          ['cellulitis', 'gout', 'burns: thermal, chemical, sunburn', 'toxic erythema: drugs (e.g. antibiotics, NSAIDs), bacteria (e.g. scarlet fever), viruses (e.g.', 'measles, slapped cheek syndrome)', 'rosacea'],
           ['drug reaction/allergy', 'fl at mole (junctional naevus)', 'non_specific viral exanthem', 'sun_induced freckles (including solar lentigines)', 'chloasma'], 
           ['sebaceous cyst', 'lipoma', 'basal cell carcinoma (BCC)', 'warts', 'xanthoma'],
            ['acne', 'scabies', 'viral wart and molluscum contagiosum', 'Campbell de Morgan spot', 'skin tag'],
            ['trauma', 'senile purpura', 'liver disease (especially alcoholic cirrhosis)', 'increased intravascular pressure, e.g. coughing, vomiting, gravitational', 'drugs, e.g. steroids, warfarin, aspirin'],
             ['impetigo', 'other staphylococcal infections, e.g. early boils, folliculitis, sycosis barbae', 'herpes simplex and zoster', 'acne vulgaris', 'rosacea'],
              ['psoriasis', 'eczema (in all its various forms)', 'fungal infections (e.g. scalp, body, feet)', 'seborrhoeic dermatitis', 'seborrhoeic keratosis'], 
        ['UTI', 'bladder tumour', 'renal/ureteric stones', 'urethritis', 'prostatic hypertrophy/carcinoma of prostate'],
         ['diabetes mellitus (DM)', 'diuretic therapy', 'chronic renal failure (CRF)', 'hypercalcaemia (e.g. osteoporosis treatment, multiple bony metastases,', 'hyperparathyroidism)', 'alcohol'],
          ['infective cystitis', 'anxiety', 'overactive bladder syndrome', 'bladder calculus', 'lower urinary tract symptoms (LUTS) in men'], 
          ['stress incontinence (with or without prolapse)', 'infective cystitis', 'overactive bladder syndrome: idiopathic or secondary to other problems, e.g. CVA,', 'dementia, Parkinson’s disease', 'chronic outfl ow obstruction, e.g. prostatic enlargement, bladder neck stenosis, urethral', 'stenosis', 'aft er prostatectomy (usually temporary)'],
           ['age related (in part caused by a reduction in bladder capacity)', 'excess fl uid at bed time (especially alcohol)', 'any cause of swollen ankles (the recumbent posture redistributes the fl uid load at night) _', 'see Swollen ankles, p. 312', 'cystitis', 'LUTS'], 
           ['prostatic hypertrophy: benign, rarely carcinoma', 'anticholinergic drugs: bladder stabilisers and tricyclic antidepressants', 'constipation', 'bladder neck obstruction/urethral stricture', 'UTI (including prostatitis and prostatic abscess)']]