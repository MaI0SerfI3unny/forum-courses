const { Course, GalleryCourse, ResourceCourse, Subject, ToolCourse,
    Category, Mark, Prerequisites,LikeSubject, ContentCourse,
    AdditionalInfoCourse, LikeCourse
} = require('@/models')
const option = require('@/options')
const validatorResponse = require('@/services/checker/checker')

const getCourses = async (req, res) => {
    try {
      const { page = '0', pageSize = '15' } = req.query
      const offset = parseInt(page) * parseInt(pageSize)
      const limit = parseInt(pageSize)
      const courses = await Course.findAndCountAll({
        include:[
            GalleryCourse,
            LikeCourse,
            {model: AdditionalInfoCourse, include: [
              ToolCourse,
              { model: ContentCourse, attributes: ['value'] }
            ]},
            {model:ResourceCourse,
                include: [{model: Subject, 
                    include: [
                        { model:Subject, as:"general" },
                        { model:Category, attributes: ['name'] }, 
                        { model:Mark, attributes: ['value'] },
                        { model:Prerequisites, attributes:['name'] },
                        { model:LikeSubject,attributes:['type'] },
                    ]}
                ]}
        ],
        offset: offset,
        limit: limit,
        distinct: true
      })
      res.status(200).json({
        status: 200,
        data: courses,
        page: parseInt(page),
        pageSize: parseInt(pageSize),
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 500,
        message: 'Some wrong with server. Please try later',
      })
    }
}

const getAvailableTypeCourse = async (_, res) => {
  try {
    let rawdata = option.typeCourse
    res.status(200).json({ status: 200, data: rawdata })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getAvailableTypePayment = async (_, res) => {
  try {
    let rawdata = option.typePaymentCourse
    res.status(200).json({ status: 200, data: rawdata })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getAvailableSource = async (_, res) => {
  try {
    let rawdata = option.sourceCourse
    res.status(200).json({ status: 200, data: rawdata })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getMyCourse = async (req, res) => {
    try {
      const { user } = req
      const questionCreator = await Course.findAll({
        where:{ userId: user.id },
        include: [
            GalleryCourse,
            LikeCourse,
            {model: AdditionalInfoCourse, include: [
              { model: ToolCourse},
              { model: ContentCourse, attributes: ['value'] }
            ]},
            {model:ResourceCourse,
                include: [{model: Subject, 
                    include: [
                        { model:Subject, as:"general" },
                        { model:Category, attributes: ['name'] }, 
                        { model:Mark, attributes: ['value'] },
                        { model:Prerequisites, attributes:['name'] },
                        { model:LikeSubject,attributes:['type'] },
                    ]}
                ]}
        ],
      })
      res.status(200).json({ status: 200, data: questionCreator })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 500,
        message: 'Some wrong with server. Please try later',
      })
    }
  }

const getCourseOne = async (req,res) => {
    try{
      const {id} = req.params
      const course = await Course.findByPk(id,{
        include:[
            GalleryCourse,
            LikeCourse,
            {model: AdditionalInfoCourse, include: [
              ToolCourse,
              { model: ContentCourse, attributes: ['value'] }
            ]},
            {model:ResourceCourse,
                include: [{model: Subject, 
                    include: [
                        { model:Subject, as:"general" },
                        { model:Category, attributes: ['name'] }, 
                        { model:Mark, attributes: ['value'] },
                        { model:Prerequisites, attributes:['name'] },
                        { model:LikeSubject,attributes:['type'] },
                    ]}
                ]}
        ],
      })
      res.status(200).json({
        status: 200,
        data: course
      })
    }catch(e){
      res.status(500).json({
        status: 500,
        message: 'Some wrong with server. Please try later',
      })
    }
}

const createCourse = async (req,res) => {
  try{
          let {type, name, link, source, price = 0, typePayment, additional={}, resource=[]} = req.body
          const {user,arrImgLink} = req

          if(!type || !name || !link || !source || !typePayment){
              return res
                  .status(403)
                  .json({ status: 403, message: 'No required parameters' })
          }

          validatorResponse({
            verification: "typeCourse",
            validateVal: type,
            statusCode: 404,
            errorName: 'Type course was`nt find'
          })

          validatorResponse({
            verification: "typePaymentCourse",
            validateVal: typePayment,
            statusCode: 404,
            errorName: 'Payment type course was`nt find'
          })

          validatorResponse({
            verification: "sourceCourse",
            validateVal: source,
            statusCode: 404,
            errorName: 'Cann`t find source'
          })
        
          if(typePayment !== "Paid" && price != 0){
              return res
                  .status(401)
                  .json({ status: 401, message: 'Payment no equel paid' })
          }
          
          const createdCourse = await Course.create({
                type,
                name,
                link,
                source,
                payment: typePayment,
                course_photo_url: arrImgLink.length ? arrImgLink[0] : "",
                payment_price: price,
                userId: user.id
          })
          
          const parseImgLink = arrImgLink.map((item) => 
              ({ url: item, courseId: createdCourse.id }))
          GalleryCourse.bulkCreate(parseImgLink)

          if(additional){
            const createAddInfo = await AdditionalInfoCourse.create({
              description: additional.description,
              time: additional.time,
              language: additional.language,
              typeLesson: additional.typeLesson,
              courseId: createdCourse.id
            })
            await ContentCourse.create({
              value: additional.content,
              additionalInfoCourseId: createAddInfo.id
            })
            if(additional.tools){
                await createAddInfo.addTool_courses(additional.tools)
            }
          }
        
          if(resource){
              const arrRes = resource.map((el) => ({ 
                      subjectId: el.subjectId, 
                      type: el.type,
                      courseId: createdCourse.id 
              }))
              ResourceCourse.bulkCreate(arrRes)
          }

          res.status(200).json({
              status:200, 
              message:"Recommended course was create successfully"
          })
      
  }catch(e){
    console.log(e)
    const errParse = JSON.parse(e.toString().slice(7))
    res.status(errParse.status).json({
          status: errParse.status,
          message: errParse.message,
      })
  }
}

const setLikeOrDislikeCourse = async (req, res) => {
  try {
    const { type, courseId } = req.body
    const { user } = req

    if (!type || !courseId || typeof courseId !== 'number') {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findTypeLike = option.typeLike.filter((el) => el.name === type)

    if (!findTypeLike.length) {
      return res.status(403).json({
        status: 403,
        message: 'Type like wasn`t founded. Must `like` or `dislike`',
      })
    }

    const findCourse = await Course.findByPk(courseId)
    if (!findCourse) {
      return res
        .status(404)
        .json({ status: 404, message: 'Course wasn`t founded' })
    }

    const findExistLike = await LikeCourse.findOne({
      where: { courseId, userId: user.id },
    })

    if (findExistLike) {
      await LikeCourse.update(
        { type },
        { where: { courseId, userId: user.id } }
      )
    } else {
      await LikeCourse.create({
        userId: user.id,
        courseId,
        type,
      })
    }
    res.status(200).json({ status: 200, message: 'Like was set for course' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = {
  getCourses,
  getCourseOne,
  getMyCourse,
  getAvailableTypeCourse,
  createCourse,
  getAvailableTypePayment,
  getAvailableSource,
  setLikeOrDislikeCourse
}