import { ApiController, ApiCommon } from '../index';
import { ErrorType, SearchWhere } from '../lib';
namespace ArtApi {
    const prefix = "_art"
    export class ClassArtComment {

        /**
         * CID
         * 
         */
        public CID: number = 0;
        /**
         * ArtID
         * 
         */
        public ArtID: number = 0;
        /**
         * GID
         * 
         */
        public GID: number = 0;
        /**
         * Key
         * 
         */
        public Key: string = "";
        /**
         * 评论人
         * 
         */
        public CUID: number = 0;
        /**
         * 评论内容
         * 
         */
        public Desc: string = "";
        /**
         * 图片
         * 
         */
        public Img: string = "";
        /**
         * 评论时间
         * 
         */
        public CTime: Date = new Date;
        /**
         * 引用评论
         * 
         */
        public PCID: number = 0;
    }
    /**
     * 文章阅读统计对象
     */
    export class ClassArtRead {

        /**
         * RID
         * 
         */
        public RID: number = 0;
        /**
         * 阅读人
         * 
         */
        public UID: number = 0;
        /**
         * 累计时间
         * 
         */
        public Secend: number = 0;
        /**
         * 文章编号
         * 
         */
        public ArtID: number = 0;
        /**
         * 阅读次数
         * 
         */
        public Times: number = 0;
        /**
         * AID
         * 
         */
        public AID: number = 0;
        /**
         * GID
         * 
         */
        public GID: number = 0;
        /**
         * Key
         * 
         */
        public Key: string = "";
    }
    /**
     * 文章阅读详情对象
     */
    export class ClassArtReadLog {

        /**
         * RLID
         * 
         */
        public RLID: number = 0;
        /**
         * 阅读人
         * 
         */
        public UID: number = 0;
        /**
         * 开始时间
         * 
         */
        public STime: Date = new Date;
        /**
         * 结束时间
         * 
         */
        public ETime: Date = new Date;
        /**
         * 更新时间
         * 
         */
        public UTime: Date = new Date;
        /**
         * 文章编号
         * 
         */
        public ArtID: number = 0;
        /**
         * 阅读次数
         * 
         */
        public Times: number = 0;
        /**
         * 阅读编号
         * 
         */
        public RID: number = 0;
        /**
         * GID
         * 
         */
        public GID: number = 0;
    }
    /**
      * 文章 Art
      * 文章编号 ArtID 自增编号(bigint(20))
      * 应用编号 AID 编号(bigint(20))
      * 标题 Title char255(char(255))
      * 摘要 Memo char255(char(255))
      * 创建时间 CTime 时间(datetime)
      * 创建人 CUID 编号(bigint(20))
      * 状态 Status 状态值(tinyint(1))
      * 版本号 V 编号(bigint(20))
      * 更新时间 UTime 时间(datetime)
      * 更新人 UUID 编号(bigint(20))
      * 首图 Head char255(char(255))
      * 文章类型 Type 编号(bigint(20))
      * 内容类型 CType 状态值(tinyint(1))
      * 置顶 Top 状态值(tinyint(1))
      * 评论 Comment 状态值(tinyint(1))
      * 发布时间 PTime 时间(datetime)
      * 原创标志 Own boolean
      * 原文链接 URL string
    */
    export class ClassArt {
        /**
         * 文章编号
         * 
         */
        public ArtID: number = 0;
        /**
         * 标题
         * 
         */
        public Title: string = "";
        /**
         * 摘要
         * 
         */
        public Memo: string = "";
        /**
         * 创建时间
         * 
         */
        public CTime: Date = new Date;
        /**
         * 创建人
         * 
         */
        public CUID: number = 0;
        /**
         * 阅读/学习时间 以s为单位
         * 
         */
        public Secend: number = 300;
        /**
         * 状态
         * 1发布0暂存-1删除
         */
        public Status: number = 0;
        /**
         * 版本号
         * 
         */
        public V: number = 1;
        /**
         * 更新时间
         * 
         */
        public UTime: Date = new Date;
        /**
         * 更新人
         * 
         */
        public UUID: number = 0;
        /**
         * 首图
         * 
         */
        public Head: string = "";
        /**
         * 文章类型
         * 
         */
        public Type: number = 0;
        /**
         * 内容类型
         * 0html,1md
         */
        public CType: number = 0;
        /**
         * 置顶
         * 
         */
        public Top: number = 0;
        /**
         * 评论
         * 
         */
        public Comment: number = 0;
        /**
         * 发布时间
         * 定时发布用
         */
        public PTime: Date = new Date;
        /**
         * MD5
         */
        public MD5: string = "";
        /**
         * 原创标志
         */
        public Own: boolean = false;
        /**
         * 原文链接
         */
        public URL: string = "";
    }

    export class ClassArtOpParams {

        /**
         * 文章编号
         * 
         */
        public ArtID: number = 0;
        /**
         * 标题
         * 
         */
        public Title: string = "";
        /**
         * 摘要
         * 
         */
        public Memo: string = "";
        /**
         * 状态
         * 1发布0暂存-1删除
         */
        public Status: number = 0;
        /**
         * 首图
         * 
         */
        public Head: string = "";
        /**
         * 文章类型
         * 
         */
        public Type: number = 0;
        /**
         * 置顶
         * 
         */
        public Top: number = 0;
        /**
         * 评论
         * 
         */
        public Comment: number = 0;
        /**
         * 发布时间
         * 定时发布用
         */
        public PTime: Date = new Date;
        /**
         * 内容类型
         * 0html,1md,2ejs
         */
        public CType: number = 0;
        /**
         * 内容
         */
        public Content: string | string[] = "";
    }
    /**
     * 文章管理类
     */
    class art extends ApiController {
        /**
         * 读取文章列表
         * @param {number} CID 文章分类号
         * @param {number} Status 文章状态
         * @param {number} P 分页页码，从1开始
         * @param {number} N 分页页内条数，默认为10
         */
        list(sw: SearchWhere): Promise<ApiCommon.List<ClassArt>> {
            return this._post('list', sw);
        }

        /**
         * 批量文章类型修改
         * @param {number[]} ArtIDs 文章编号列表
         * @param {'Status'|'Top'} Op 操作标识
         * @param {boolean} Val 操作值
         */
        batch(ArtIDs: number[], Op: 'Status' | 'Top', Val: boolean) {
            for (let x of ArtIDs) {
                if (!(Number(x) > 0)) {
                    throw new Error('ArtIDs: ' + x)
                }
            }
            if (!['status', 'top'].includes(Op.toLowerCase())) {
                throw new Error('Op Error')
            }
            return this._post('batch', { ArtIDs, Op, Val: !!Val ? 1 : 0 })
        }

        /**
         * 读取文章内容
         * @param ArtID 文章编号
         * @param V 版本号
         */
        async read(ArtID: number, V?: number, raw: boolean = false): Promise<ClassArt> {
            if (!ArtID) {
                throw new Error('ArtID')
            }
            let p = ['read', ArtID]
            if (V) {
                p.push(V);
            }
            let rs = await this._post(p.join('/') + '.json', { ArtID, V })
            if (rs.Content.Type == 1 && false === raw) {
                rs.Content.Content = rs.Content.Content.split(',').map((v: string) => `<img src="${v}"/>`).join('<br/>')
            }
            return rs;
        }

        /**
         * 保存文章
         * @param data ClassArtOpParams
         */
        save(data: ClassArtOpParams): Promise<ClassArt> {
            // if (data.Title.length == 0) {
            //     throw new Error('Title.length>0')
            // }
            // if (data.Content.length == 0) {
            //     throw new Error('Content.length>0')
            // }
            if (data.CType == 1) {
                if (data.Content instanceof Array) {
                    for (let x of data.Content) {
                        if ('string' != typeof x) {
                            throw new Error('内容数据错误')
                        }
                    }
                    data.Content = data.Content.join(',')
                }
            }
            return this._post('save', data);
        }

        /**
         * 文章分类管理：注意该操作会清除该文章的分类后再添加，请确保传入了所有该文章的分类设定
         * @param ArtID 
         * @param CIDs 
         */
        classify(ArtID: number, CIDs: number[]): Promise<boolean> {
            if (ArtID <= 0 || CIDs.length == 0) {
                throw new Error(ErrorType.Art.PARAMS_IS_ERROR);
            }
            for (let x in CIDs) {
                if (isNaN(CIDs[x] = Number(CIDs[x]))) {
                    throw new Error('CIDs');
                }
                if (CIDs[x] <= 0) {
                    throw new Error('CIDs');
                }
            }
            return this._post('classify', { ArtID, CIDs });
        }
    }

    /**
     * 添加文章分类对象
     */
    export class ClassifyAddParams {
        Name: string = "";
        PCID: number = 0;
        Status: number = 1;
        Memo: string = "";
        Icon: string = "";
        Type: number = 1;
        Sort: number = 0;
        Key?: string = '';
        GID?: number = 0;
    }

    /**
     * 修改文章分类对象
     */
    export class ClassifySaveParams extends ClassifyAddParams {
        CID: number = 0;
        Name: string = "";
        PCID: number = 0;
        Status: number = 1;
        Memo: string = "";
        Icon: string = "";
        Sort: number = 0;
        Key?: string = '';
        GID?: number = 0;
    }

    /**
     * 文章分类 Classify
     * 分类编号 CID 自增编号(bigint(20))
     * 分类名称 Name char255(char(255))
     * 创建时间 CTime 时间(datetime)
     * 创建人 CUID 编号(bigint(20))
     * 父分类 PCID 编号(bigint(20))
     * 状态 Status 状态(tinyint(1))
     * 备注 Memo char255(char(255))
     * 图标 Icon char(50)(char(50))
     * 分类类型 Type 编号(bigint(20))
    */
    export class ClassClassify {

        /**
         * 分类编号
         * 
         */
        public CID: number = 0;
        /**
         * 分类名称
         * 
         */
        public Name: string = "";
        /**
         * 对象编号，用于分组或其他用途
         * 
         */
        public GID: number = 0;
        /**
         * 区分建
         * 
         */
        public Key: string = "";
        /**
         * 创建时间
         * 
         */
        public CTime: Date = new Date;
        /**
         * 创建人
         * 
         */
        public CUID: number = 0;
        /**
         * 父分类
         * 
         */
        public PCID: number = 0;
        /**
         * 状态
         * 1启用0禁用
         */
        public Status: number = 1;
        /**
         * 备注
         * 
         */
        public Memo: string = "";
        /**
         * 图标
         * 
         */
        public Icon: string = "";
        /**
         * 分类类型
         * 
         */
        public Type: number = 0;
        /**
         * 排序
         */
        public Sort: number = 0;
    }

    /**
     * 文章分类管理类
     */
    class classify extends ApiController {
        /**
         * 获取我的所有分类
         * 按Sort和CID排序后返回
         */
        all(w: { [index: string]: string | number | Object }): Promise<ClassClassify[]> {
            return this._post('all', w);
        }
        /**
         * 批量添加文章分类
         * @param data 
         */
        adds(data: ClassifyAddParams[]): Promise<ClassClassify[]> {
            if (data.length == 0) {
                throw new Error(ErrorType.Art.DATA_LENGTH_IS_ZERO);
            }
            return this._post('adds', data);
        }
        /**
         * 保存文章分类
         * @param data 
         */
        saves(data: ClassifySaveParams[]): Promise<ClassClassify[]> {
            if (data.length == 0) {
                throw new Error(ErrorType.Art.DATA_LENGTH_IS_ZERO);
            }
            if (data.length > 50) {
                throw new Error(ErrorType.Art.DATA_LENGTH_TOO_LONG)
            }
            if (data instanceof Array && data.length > 0) {
                for (let x of data) {
                    if (x.CID == 0) {
                        throw new Error('Classifies.CID')
                    }
                }
            } else {
                throw new Error(ErrorType.Art.DATA_LENGTH_IS_ERROR)
            }
            return this._post('saves', data);
        }
    }

    /**
     * 文章类型管理类
     */
    class type extends ApiController {
        /**
         * 获取所有支持的文章类型
         */
        all() {
            return this._post('all');
        }
    }
    export class ClassArtReadDetail extends ClassArtRead {
        /**
         * 明细记录
         */
        Logs: ClassArtReadLog[] = [];
    }
    /**
     * 阅读记录
     */
    class read extends ApiController {
        /**
         * 读取分析数据记录，若涉及到统计分析请前端处理
         * @param GID 
         */
        analyze(GID?: number, ArtID?: number): Promise<ClassArtRead> {
            return this._post('analyze', { GID, ArtID })
        }
        /**
         * 添加阅读记录
         * @param GID 分组编号，如 按企业切分则是企业编号
         * @param ArtID 文章编号
         * @param UID 阅读人
         * @param Key 字符串切分键
         */
        alog(GID: number, ArtID: number, UID: number, Key: string): Promise<true> {
            return this._post('alog', { GID, ArtID, UID, Key })
        }
        /**
         * 读取阅读记录
         * @param GID 分组编号，如 按企业切分则是企业编号
         * @param ArtID 文章编号
         * @param UID 阅读人
         * @param Key 字符串切分键
         */
        rlog(GID: number, ArtID: number, UID: number, Key: string): Promise<ClassArtReadDetail> {
            return this._post('rlog', { GID, ArtID, UID, Key })
        }
    }
    class comment extends ApiController {
        /**
         * 添加评论
         * 支持引用评论，请传入PCID参数作为引用的评论编号
         * @param Comments 
         */
        adds(Comments: ClassArtComment[]) {
            return this._post('adds', Comments);
        }
        /**
         * 读取评论内容
         * @param ArtID 
         * @param GID 
         */
        read(ArtID: number, GID?: number, Tree: boolean = true, P: number = 1, N: number = 10) {
            return this._post('read', { ArtID, GID, P, N, Tree });
        }
    }
    export const CommentApi = new comment('Comment', prefix)
    /**
     * 文章管理
     */
    export const Art = new art('Art', prefix);
    export const ArtApi = Art;

    /**
     * 文章类型
     */
    export const Type = new type('Type', prefix);
    export const TypeApi = Type

    /**
     * 文章分类管理
     */
    export const Classify = new classify('Classify', prefix);
    export const ClassifyApi = Classify

    export const ReadApi = new read('Read', prefix)

}
export default ArtApi;